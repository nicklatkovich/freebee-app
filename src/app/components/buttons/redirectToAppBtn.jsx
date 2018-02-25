import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class RedirectToAppBtn extends Component {
  render() {
    return (
      <Link to="/map" className="redirect-to-app-btn">
        Start
      </Link>
    )
  }
}
