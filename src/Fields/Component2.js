import React from 'react'
import Hoc from '../Hoc/Hoc'
import TextField from '@mui/material/TextField'


class Component2 extends React.PureComponent {
    render() {
        return (
            <div>
                <TextField id="standard-basic" label='Address Line 1 ' variant="standard" style={{ width: '95%' }} className='mx-2' required/>
            </div>
        )
    }
}

export default Hoc(Component2)

