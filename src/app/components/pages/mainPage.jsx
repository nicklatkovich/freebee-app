import React, { Component } from 'react'
import { YMaps, Map, GeoObject, Placemark } from 'react-yandex-maps'
import MainHeader from '../headers/mainHeader'
import AddingBar from '../sidebars/addingBar'
import SearchBar from '../sidebars/searchBar'
import ViewBar from '../sidebars/viewBar'
import getNear from '../../utils/geoService'
import * as freebieType from '../../constants/freebieType'
import icons from '../../constants/icons'

export default class MainPage extends Component {
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
      currentObject: null
    }
  }

  componentDidMount = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      // const lat = position.coords.latitude;
      // const lng = position.coords.longitude;
      const lat = 53.877883
      const lng = 27.481955
      
      this.updateMap(lat, lng)
      
    })
  }

  resizeMax = () => {
    this.setState({
      width: 1352
    })
  }
  resizeMin = () => {
    this.setState({
      width: 1120
    })
  }

  updateMap = (lat, lng) => {
    getNear(lat,lng).then(data => { 
      console.log('Near')
      console.log(data)
      
      this.setState({
        currentCoords: {
          lat,
          lng,
        },
        near: data
      })
     })
    
  }
  
  handleClickOnMap = (e) => {
    const coords = e.get('coords')
    console.log(coords)
  }

  handleDrawerOpen = () => {
    this.setState({ open: true, width: 1120 })
  }

  handleDrawerClose = () => {
    this.setState({ open: false, width: 1345 })
  }

  handleGeoObjectClick = (data) => {
    this.setState({
      currentObject: data,
      open: true,
      width: 1120
    })
  }

  render() {
    const isOpen = this.state.open
    const {height, width, near, currentObject} = this.state
    const {lat, lng} = this.state.currentCoords
    const mapState = {center: [lat, lng], zoom: 16}
    console.log('near')
    console.log(near)
    console.log('curr')
    console.log(currentObject)

    const geoObjects = near.map((val, index) => {
      const {location, type, description} = val
      console.log('#')

      return (
        <GeoObject 
          key={index}
          onClick={() => { this.handleGeoObjectClick(val) }}
          geometry={{
            type: 'Point',
            coordinates: location,
          }}
          properties={{
            // The placemark content.
            iconContent: type,
            hintContent: description,
          }}
          // Options.
          options={{
            // Options. You must specify this type of layout.
            iconLayout: 'default#image',
            // Custom image for the placemark icon.
            iconImageHref: icons[type.toLowerCase()],
            // The size of the placemark.
            iconImageSize: [30, 42],
            // The offset of the upper left corner of the icon relative
            // to its "tail" (the anchor point).
            iconImageOffset: [-3, -42],
          }}
        />
      )
    })
    console.log(geoObjects)

    return (
      <div className="main-page">
        <MainHeader 
          onMenuClick={this.handleDrawerOpen}
        />
        <div className="main-page__inner">
          <ViewBar currentObject={currentObject}  isOpen={isOpen} onHideClick={this.handleDrawerClose}/>
          <div className="main-page__map">
            <YMaps>
              <Map state={mapState} 
              onClick={this.handleClickOnMap} 
              width={width} 
              height={height}>
                {geoObjects}
              </Map>
            </YMaps>
          </div>
        </div>
      </div>
    )
  }
}
