import React, { Component } from 'react'
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

export default class Component6 extends Component {

    render() {
        const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
        return (
            <>
                <div>
                    <Checkbox {...label} />
                    <p className='d-inline'>Use this address for payment details</p>
                </div>
                <div className='d-inline float-end'>
                    <Button variant="contained" type='submit'>Contained</Button>
                </div>
            </>
        )
    }
}
