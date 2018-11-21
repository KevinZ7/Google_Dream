import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import MapCluster from './MapCluster.jsx'

export class MapContainer extends Component {
  render() {

    return (
      <div id="map" className="col col-lg-10">
        <MapCluster specificEntity={this.props.entity} testing={this.props.testing}/>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyA3b7cNdY89lR9NvZ3VLrG0EEUnSCcKKyg')
})(MapContainer)