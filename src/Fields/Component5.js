import React from 'react'
import Hoc from '../Hoc/Hoc'
import TextField from '@mui/material/TextField';

class Component5 extends React.PureComponent {
  render() {
    return (
      <div>
        <TextField id="standard-basic" label="Zip/Postal Code" variant="standard" className='mx-2' required  style={{ width: '46%' }}/>
        <TextField id="standard-basic" label="Country" variant="standard" className='mx-2' style={{ width: '46%' }} required />
      </div>
    )
  }
}



export default Hoc(Component5);
