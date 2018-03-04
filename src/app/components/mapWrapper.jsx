import React from 'react'
import PropTypes from 'prop-types'
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps'

const fakePosition = {
  lat: 53.877883,
  lng: 27.481955,
}

const MapWrapper = withScriptjs(withGoogleMap((props) => {
  const { nearestFreebies, onMarkerClick } = props

  const freebiesMarkers = nearestFreebies.map((freebie) => {
    console.log(freebie)
    return (
      <Marker
        onClick={() => { onMarkerClick(freebie) }}
        position={{ lat: freebie.location[0], lng: freebie.location[1] }}
      />
    )
  })

  return (
    <div className="map-wrapper">
      <GoogleMap
        defaultZoom={17}
        defaultCenter={{ lat: fakePosition.lat, lng: fakePosition.lng }}
      >
        {freebiesMarkers}
      </GoogleMap>
    </div>
  )
}))


export default MapWrapper