import React from 'react'
import RedirectToAppBtn from '../buttons/redirectToAppBtn'
import { login, isLoggedIn } from '../../utils/authService'

export default () => {
  return (
    <div className="index-header">
      <div className="index-header__inner">
        {
          (isLoggedIn())
            ? (<RedirectToAppBtn isEnabled />)
            : (<RedirectToAppBtn onClick={() => { login() }} isEnabled={false} />)
        }
      </div>
    </div>
  )
}
