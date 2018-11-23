import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { MapView, Location, Permissions } from 'expo';
import {GOOGLE_API,ip} from '../secret.js'
import DreamModeButton from './DreamModeButton.js'




export default class DefaultMap extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: 31.354302,
        longitude:  121.227119,
        latitudeDelta: 0.0322,
        longitudeDelta: 0.0421,
      },
      userLocation: {
        latlng:{
          latitude: 31.354302,
          longitude:  121.227119
        },
        title: "My Location",
        description: "Me"
      },
      markers: [],
      withinRadius: true,
      searchTerm: '',
      searchTerm2: ''

    }
    this.locationSearch = this.locationSearch.bind(this)
    this.calculateDistance = this.calculateDistance.bind(this)
    this.setWithinRadius = this.setWithinRadius.bind(this)
    this.setSearchTerm = this.setSearchTerm.bind(this)
  }

  setWithinRadius(value) {
    this.setState((prevState) => {
      return {
        withinRadius: value
      }
    })
  }

  _getLocationAsync = async () => {
      await Permissions.askAsync(Permissions.LOCATION);
      let location = await Location.getCurrentPositionAsync({});
      this.setState({
        region: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0122,
          longitudeDelta: 0.0121,
        },
        userLocation: {
          latlng: {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude
          },
          title: "My Location",
          description: "Me"
        }

      });

  }

  locationSearch(text){
    let encodedText = encodeURIComponent(text)
    let apiRequest = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=49.281318,-123.114574&rankby=distance&keyword=${encodedText}&key=${GOOGLE_API}`

    fetch(apiRequest)
    .then((response) => response.json())
    .then((responseJson) => {
      if(this.calculateDistance(responseJson.results[0]) >= 400){
        this.setState({markers:[]})
        console.log("THERE IS NOTHING FOUND WITHIN 400")
        this.setWithinRadius(false)
      } else {
        this.setState({markers: []})
        responseJson.results.forEach((result) => {
          if(this.calculateDistance(result) < 400){
            let currentMarkers = this.state.markers;
            let id = this.state.markers.length + 1;
            let newMarker = [{
              id: id,
              latlng: {
                latitude: result.geometry.location.lat,
                longitude: result.geometry.location.lng
              },
              title: result.name,
              description: result.vicinity
            }]
            let newMarkers = currentMarkers.concat(newMarker)
            this.setState({markers: newMarkers});
          }
        })
        this.setWithinRadius(true)
      }
    })
  }

  setSearchTerm(term) {
    this.setState({
      searchTerm: encodeURIComponent(term),
      searchTerm2: term
    })
  }

  calculateDistance(result){
    let lat1 = result.geometry.location.lat;
      let lon1 = result.geometry.location.lng;
      let lat2 = this.state.region.latitude;
      let lon2 = this.state.region.longitude;
      let radius = 6371;
      let dLat = this.deg2rad(lat2-lat1);
      let dLon = this.deg2rad(lon2-lon1);
      let a =
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
        Math.sin(dLon/2) * Math.sin(dLon/2)
        ;
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
      var d = radius * c; // Distance in km

      return d * 1000;

  }

  deg2rad(deg){
    return deg * (Math.PI/180)
  }





  // onRegionChange(region) {
  //   this.setState({ region });
  // }
  componentDidMount(){
    this._getLocationAsync()
  }

  render() {
    return (
    <View style={{flex:1}}>

      <MapView style={{ flex:1}}
        region={
          this.state.region
        }
        provider="google"
      >
        {this.state.markers.map(marker => (
          <MapView.Marker draggable
            coordinate={marker.latlng}
            title={marker.title}
            description={marker.description}
            onDragEnd={(e) => this.setState({ x: e.nativeEvent.coordinate })}
            key={marker.id}
          />
        ))}

        <MapView.Marker
          coordinate={this.state.userLocation.latlng}
          title={this.state.userLocation.title}
          description={this.state.userLocation.description}
        >
          <Image
            source={require('../assets/images/userLocation.png')}
            style={{ width: 30, height: 30 }}
          />
        </MapView.Marker>

      </MapView>

      <MapView.Callout>
        <View style={styles.calloutView}>
          <TextInput style={styles.calloutSearch}
            placeholder={"Search"}
            onSubmitEditing={(event) => {
              this.locationSearch(event.nativeEvent.text)
              this.setSearchTerm(event.nativeEvent.text)}
            }
          />
        </View>
      </MapView.Callout>

      <DreamModeButton navigation={this.props.navigation} withinRadius={this.state.withinRadius} setWithinRadius={this.setWithinRadius} currentLocation={this.state.userLocation.latlng} searchTerm={this.state.searchTerm} searchTerm2={this.state.searchTerm2}/>

    </View>
    );
  }


}


// https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=49.281318,-123.114574&rankby=distance&keyword=rbc&key=AIzaSyB6P4NpwuilrFszLH-kQ8vBk9nTO_aOW6E



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  calloutView: {
  flexDirection: "row",
  backgroundColor: "white",
  borderRadius: 5,
  width: "90%",
  marginLeft: "5%",
  marginRight: "5%",
  marginTop: 30
},
calloutSearch: {
  borderColor: "transparent",
  marginLeft: "10%",
  width: "90%",
  // marginRight: 10,
  height: 40,
  borderWidth: 0.0
}
});

