import React, { Component } from 'react'
import RedirectToAppBtn from '../buttons/redirectToAppBtn'
import { login, logout, isLoggedIn } from '../../utils/authService'

export default class IndexHeader extends Component {

  render() {
    return (
      <div className="index-header">
        <div className="index-header__inner">
          {
            (isLoggedIn())
              ? (<RedirectToAppBtn onClick={() => { console.log('work'); }} isEnabled={true} />)
              : (<RedirectToAppBtn onClick={() => { login() }} isEnabled={false} />)
          }
        </div>
      </div>
    )
  }
}
