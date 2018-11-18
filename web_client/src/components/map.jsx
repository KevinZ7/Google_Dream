import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
  render() {

    return (
      <div id="map"className="col col-lg-10">
       <Map
          google={this.props.google}

          initialCenter={{
            lat: 49.2827,
            lng: -123.11934
          }}
          zoom={12}
          onClick={this.onMapClicked}
        />
        </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyA3b7cNdY89lR9NvZ3VLrG0EEUnSCcKKyg')
})(MapContainer)