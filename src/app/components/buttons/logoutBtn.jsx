import React from 'react'
import { Link } from 'react-router-dom'
import * as Api from '../../constants/api'

export default () => {
  const handlerLogout = () => {
    window.sessionStorage.removeItem(Api.auth_token_key)
  }

  return (
    <Link to="/" onClick={handlerLogout} className="logout-btn">
        LogoutBtn
    </Link>
  )
}
