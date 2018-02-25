import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class RedirectToAppBtn extends Component {
  render() {
    const {isEnabled, onClick} = this.props
    console.log('is ' + isEnabled)
    return (
      <Link to={isEnabled ? '/map' : '/'} 
        className="redirect-to-app-btn"
        onClick={onClick}
      >
        Start
      </Link>
    )
  }
}
