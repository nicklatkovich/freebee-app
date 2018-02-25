import React, { Component } from 'react'
import MainHeader from '../headers/mainHeader'
import AddingBar from '../sidebars/addingBar'
import SearchBar from '../sidebars/searchBar'
import ViewBar from '../sidebars/viewBar'

export default class MainPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false
    }
  }


  handleDrawerOpen = () => {
    this.setState({ open: true })
  }

  handleDrawerClose = () => {
    this.setState({ open: false })
  }

  render() {
    const isOpen = this.state.open

    return (
      <div className="main-page">
        <MainHeader 
          onMenuClick={this.handleDrawerOpen}
        />
        <div className="main-page__inner">
          <ViewBar isOpen={isOpen} onHideClick={this.handleDrawerClose}/>
        </div>
      </div>
    )
  }
}
