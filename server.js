const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
const appModel = require('./appModel/appModel')
const bcrypt = require('bcrypt')
var session = require('express-session');
var MongoDBStore = require('connect-mongodb-session')(session);
const passport = require('passport')
const LocalStrategy = require('passport-local')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')

mongoose.connect('mongodb://127.0.0.1:27017/Session')
mongoose.connection.once('open', () => {
    console.log('mongodb connected')
}).on('error', () => {
    console.log(err)
})

const app = express()

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

// var store = new MongoDBStore({
//     uri: 'mongodb://127.0.0.1:27017/Session',
//     collection: 'mySession'
// })

app.use(require('express-session')({
    secret: 'This is a secret',
    cookie: {
        maxAge: 1500 * 60
    },
    // store: store,
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy({ usernameField: 'email' },
    function (username, password, done) {
        appModel.findOne({ email: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) { return done(null, false, { message: 'User Does Not Exist' }); }
            if (!bcrypt.compareSync(password, user.password)) { return done(null, false, { message: 'Password Incorrect' }); }
            return done(null, user);
        });
    }
));

passport.serializeUser(function (user, done) {
    done(null, user._id);
});

passport.deserializeUser(function (id, done) {
    appModel.findById(id, function (err, user) {
        done(err, user);
    });
});

// DATABASE OPERATIONS
app.post('/register', (req, res) => {
    let user = new appModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        city: req.body.city,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
    })
    user.save()
    res.redirect('/login/page')
})

app.post('/login',
    passport.authenticate('local', { failureRedirect: '/login/page' }),
    function (req, res) {
        let token = jwt.sign({ id: req.body.email }, 'ankit sharma secret')
        res.cookie('token', token, {
            httpOnly: true
        })
        res.redirect('/profile/page');
    });

app.post('/logout', (req, res) => {
    res.clearCookie('token')
    res.redirect('/login/page')
})

// APP VIEWS
const Authenticated = (req, res, next) => {
    let token = req.cookies.token
    try {
        let check = jwt.verify(token, 'ankit sharma secret');
        console.log(check)
        next()
    } catch (err) {
        console.log(err)
        res.redirect('/login/page')
    }
}

app.get('/login/page', (req, res) => {
    res.render('login')
})

app.get('/register/page', (req, res) => {
    res.render('register')
})

app.get('/profile/page', Authenticated, (req, res) => {
    res.render('profile')
})

//..........................
app.listen(3000, (err) => {
    if (!err) {
        console.log('Server Running of port 3000')
    }
})