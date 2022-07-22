import React from 'react'
import PropTypes from 'prop-types'
import { InputLabel, TextField } from '@mui/material'

const CustomizableInput = props => {
  
    function handleSetValue(e) {
        props.setValue(e);
    }
  
    return (
    <>
        <InputLabel className='mt-4'>{props.label != undefined ? props.label : ""}</InputLabel>
        <TextField disabled={props.disabled != undefined ? props.disabled: ""} className='mt-4' type={props.type}  value={props.value} onChange={ e => handleSetValue(e.target.value)} />
    </>
  )
}

CustomizableInput.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired,
    type: PropTypes.oneOf(['date', 'text','textarea']),
    disabled: PropTypes.bool
}

export default CustomizableInput