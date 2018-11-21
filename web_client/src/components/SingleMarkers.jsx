import React from 'react'
const fetch = require("isomorphic-fetch");
const { compose, withProps, withHandlers } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} = require("react-google-maps");

const { MarkerClusterer } = require("react-google-maps/lib/components/addons/MarkerClusterer");

export default class SingleMarkers extends React.Component {
  state = {
    markers:[]
  }
  componentDidMount(){
    this.setState({
      markers :this.props.mapMarkers.map((marker) =>
      <Marker
      onClick={() => alert('hi')}
      key={marker.id}
      position={{lat: marker.lat, lng: marker.lng}} />)
    })
  }


  render() {

    return (
    <div>
      {this.state.markers}
    </div>
    )

  }
}