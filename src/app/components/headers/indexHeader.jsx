import React, { Component } from 'react'
import RedirectToAppBtn from '../buttons/redirectToAppBtn'

export default class IndexHeader extends Component {
  render() {
    return (
      <div className="index-header">
        <div className="index-header__inner">
          <RedirectToAppBtn />
        </div>
      </div>
    )
  }
}
