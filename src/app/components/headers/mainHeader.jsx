import React, { Component } from 'react'
import LogoutBtn from '../buttons/logoutBtn'
import ProfileBtn from '../buttons/profileBtn'

export default class MainHeader extends Component {
  render() {
    return (
      <div className="main-header">
        <div className="main-header__inner">
          <LogoutBtn />
          <ProfileBtn />
        </div>
      </div>
    )
  }
}
