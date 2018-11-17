import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { MapView, Location, Permissions } from 'expo';




export default class DreamMap extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 31.354302,
        longitude:  121.227119,
        latitudeDelta: 0.0322,
        longitudeDelta: 0.0421,
      },
      markers: [
        {
          id: 1,
          latlng: {
            latitude:49.283439,
            longitude:-123.115393
          },
          name: "A&W",
          type: "restaurant",
          color: "red"
        },
        {
          id: 2,
          latlng: {
            latitude:49.283327,
            longitude:-123.117689
          },
          name: "Dog Park",
          type: "park",
          color: "green"
        },
        {
          id: 3,
          latlng: {
            latitude:49.281843,
            longitude:-123.120843
          },
          name: "Walk in clinic",
          type: "health",
          color: "blue"
        }
      ],
      userLocation: {
        latlng:{
          latitude: 31.354302,
          longitude:  121.227119
        },
        title: "My Location",
        description: "Me"
      }
    }

  }

  _getLocationAsync = async () => {

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

              console.log(this.state.region);
        console.log(this.state.userLocation)
  }





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
          <MapView.Marker
            coordinate={marker.latlng}
            title={marker.title}
            description={marker.description}
            key={marker.id}
            pinColor={marker.color}
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
    </View>
    );
  }
}

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

