import React from 'react'
import Hoc from '../Hoc/Hoc'
import TextField from '@mui/material/TextField';

class Component1 extends React.PureComponent {
  render() {
    return (
      <div>
        <TextField id="standard-basic" label="First Name " required variant="standard" className='mx-2' style={{ width: '46%' }}/>
        <TextField id="standard-basic" label="Last Name " required variant="standard" className='mx-2' style={{ width: '46%' }}/>
      </div>
    )
  }
}



export default Hoc(Component1);
