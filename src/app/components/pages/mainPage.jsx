import React, { Component } from 'react'
import MainHeader from '../headers/mainHeader'

export default class MainPage extends Component {
  render() {
    return (
      <div className="main-page">
        <MainHeader />
        <div className="main-page__inner">
          MAIN PAGE INNER
        </div>
      </div>
    )
  }
}
