import React, {Component} from 'react';


function initMap(){
      var options= {
        zoom: 12,
        center: {lat: 49.2827, lng: -123.11934}
        }
      var map = new google.maps.Map(document.getElementById('map'), options);
    }


class Maps extends Component{s
  render(){
    return(
        <div id="map">
        {initMap}
        </div>
      )
}
}

export default Maps;