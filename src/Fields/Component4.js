import React from 'react'
import Hoc from '../Hoc/Hoc'
import TextField from '@mui/material/TextField';

class Component4 extends React.PureComponent {
  render() {
    return (
      <div>
        <TextField id="standard-basic" label="City" variant="standard" className='mx-2' style={{ width: '46%' }} required/>
        <TextField id="standard-basic" label="State/Provision/Region" variant="standard" className='mx-2' style={{ width: '46%' }}/>
      </div>
    )
  }
}



export default Hoc(Component4);
