import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import MapCluster from './MapCluster.jsx'

export class MapContainer extends Component {
  render() {

    return (
      <div id="map" className="col col-lg-7">
        <MapCluster  clusterClickHandler={this.props.clusterClickHandler} mapMarkers={this.props.mapMarkers}/>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyA3b7cNdY89lR9NvZ3VLrG0EEUnSCcKKyg')
})(MapContainer)