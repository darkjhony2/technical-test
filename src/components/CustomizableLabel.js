import React from 'react'
import PropTypes from 'prop-types'
import { Label } from '@mui/icons-material'
import { InputLabel } from '@mui/material'

const CustomizableLabel = props => {
  return (
    <InputLabel><h1><strong>{props.text}</strong></h1></InputLabel>
  )
}

CustomizableLabel.propTypes = {
    text: PropTypes.string.isRequired
}

export default CustomizableLabel