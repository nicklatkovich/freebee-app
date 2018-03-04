import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
  const { isEnabled, onClick } = this.props
  return (
    <Link
      to={isEnabled ? '/map' : '/'}
      className="redirect-to-app-btn"
      onClick={onClick}
    >
        Start
    </Link>
  )
}
