import React from 'react'
import PropTypes from 'prop-types'
import { Label } from '@mui/icons-material'
import { InputLabel } from '@mui/material'

const CustomizableTitle = props => {
    return (
        <InputLabel>
            <h1><strong>{props.text}</strong></h1>
        </InputLabel>
    )
}

CustomizableTitle.propTypes = {
    text: PropTypes.string.isRequired
}

export default CustomizableTitle