import React from 'react'
import Hoc from '../Hoc/Hoc'
import TextField from '@mui/material/TextField'


class Component3 extends React.PureComponent {
    render() {
        return (
            <div>
                <TextField id="standard-basic" label='Address Line 2' variant="standard" style={{ width: '95%' }} className='mx-2' />
            </div>
        )
    }
}

export default Hoc(Component3)

