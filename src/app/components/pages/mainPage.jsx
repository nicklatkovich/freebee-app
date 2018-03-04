import React, { Component } from 'react'
import PropTypes from 'prop-types'
import autobind from 'autobind-decorator'
import MainHeader from '../headers/mainHeader'
import MapWrapper from '../mapWrapper'
// import AddingBar from '../sidebars/addingBar'
// import SearchBar from '../sidebars/searchBar'
import ViewBar from '../sidebars/viewBar'
import getNear from '../../utils/geoService'
import * as freebieType from '../../constants/freebieType'
import icons from '../../constants/icons'

class MainPage extends Component {
  static propTypes = {

  }

  constructor(props) {
    super(props)

    this.state = {
      open: false,
      width: 1352,
      height: 650,
      currentCoords: {
        lat: 0,
        lng: 0,
      },
      near: [],
      currentObject: null,
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      // const lat = position.coords.latitude;
      // const lng = position.coords.longitude;
      const lat = 53.877883
      const lng = 27.481955

      this.updateMap(lat, lng)
    })
  }

  @autobind
  resizeMax() {
    this.setState({
      width: 1352,
    })
  }

  @autobind
  resizeMin() {
    this.setState({
      width: 1120,
    })
  }

  @autobind
  updateMap(lat, lng) {
    getNear(lat, lng).then((data) => {
      console.log('Near data:')
      console.log(data)
      this.setState({
        currentCoords: {
          lat,
          lng,
        },
        near: data,
      })
    })
  }

  @autobind
  handleDrawerOpen() {
    this.setState({ open: true, width: 1120 })
  }

  @autobind
  handleDrawerClose() {
    this.setState({ open: false, width: 1345 })
  }

  @autobind
  handleGeoObjectClick(data) {
    this.setState({
      currentObject: data,
      open: true,
      width: 1120,
    })
  }

  render() {
    const isOpen = this.state.open
    const { height, width, near, currentObject } = this.state
    const { lat, lng } = this.state.currentCoords
    const mapState = { center: [lat, lng], zoom: 16 }

    return (
      <div className="main-page">
        <MainHeader
          onMenuClick={this.handleDrawerOpen}
        />
        <div className="main-page__inner">
          <ViewBar
            currentObject={currentObject}
            isOpen={isOpen}
            onHideClick={this.handleDrawerClose}
          />
          <MapWrapper
            nearestFreebies={near}
            onMarkerClick={this.handleGeoObjectClick}
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCJ_9iNYFQK3r1CF3DVi3cburNaAOkdBKI&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: '100%' }} />}
            containerElement={<div className="map-container" />}
            mapElement={<div className="map-element" style={{ height: '100%' }} />}
          />
        </div>
      </div>
    )
  }
}

export default MainPage