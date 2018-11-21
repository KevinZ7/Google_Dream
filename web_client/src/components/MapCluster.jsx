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


const MapWithAMarkerClusterer = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyA3b7cNdY89lR9NvZ3VLrG0EEUnSCcKKyg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withHandlers({
    onMarkerClustererClick: () => (markerClusterer) => {
      const clickedMarkers = markerClusterer.getMarkers()
      console.log(`Current clicked markers length: ${clickedMarkers.length}`)
      console.log(clickedMarkers)
    },
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={3}
    defaultCenter={{ lat: 49.2827, lng: -123.11934 }}
  >
    <MarkerClusterer
      onClick={props.onMarkerClustererClick}
      averageCenter
      enableRetinaIcons
      gridSize={60}
    >
      {props.markers.map(marker => (
        <Marker
          onClick={props.test}
          key={marker.id}
          position={{ lat: marker.lat, lng: marker.lng }}
        />
      ))}
    </MarkerClusterer>
  </GoogleMap>
);

export default class MapCluster extends React.PureComponent {
  componentWillMount() {
    this.setState({ markers: [] })
  }

  componentDidMount() {
    const url = 'http://localhost:8080'

    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({ markers: data });
      }).catch((error) => console.log(error));
  }

  render() {
    return (
      <MapWithAMarkerClusterer markers={this.state.markers} test={this.props.specificEntity} />
    )
  }
}