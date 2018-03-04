import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const redirectToAppBtn = ({ isEnabled, onClick }) => (
  <Link
    to={isEnabled ? '/map' : '/'}
    className="redirect-to-app-btn"
    onClick={onClick}
  >
    Start
  </Link>
)

redirectToAppBtn.propTypes = {
  isEnabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default redirectToAppBtn