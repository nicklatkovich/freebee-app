import React, { Component } from 'react'
import Api from '../../constants/api'

export default class LogoutBtn extends Component {
  handlerLogout = () => {
    window.sessionStorage.removeItem(Api.auth_token_key)
  }

  render() {
    return (
      <Link to="/" onClick={this.handlerLogout} className="logout-btn">
        LogoutBtn
      </Link>
    )
  }
}
