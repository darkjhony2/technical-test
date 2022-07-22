import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@mui/material'

const CustomizableButton = (props) => {

  function executeFunction() {
    props.executeFunction();
  }

  return (
    <Button 
    style={{marginRight: props.marginRight != undefined ? props.marginRight : ""}} 
    onClick={e => executeFunction()} 
    variant={props.variant}>{props.text}</Button>
  )
}

CustomizableButton.propTypes = {
    variant: PropTypes.oneOf(['text','contained','outlined']),
    text: PropTypes.string.isRequired,
    executeFunction: PropTypes.func.isRequired,
    marginRight: PropTypes.number
}

export default CustomizableButton