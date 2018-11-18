import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { MapView, Location, Permissions } from 'expo';
import GOOGLE_API from '../secret.js';





export default class DreamMap extends React.Component {




  render() {

    var markerImage
    if(Object.keys(this.props.mapMarker).length > 0){
      if(this.props.mapMarker.color === 'red' ){
        markerImage = require('../assets/images/red_marker.png')
      } else if(this.props.mapMarker.color === 'green'){
        markerImage = require('../assets/images/green_marker.png')
      } else if(this.props.mapMarker.color === 'blue'){
        markerImage = require('../assets/images/blue_marker.png')
      } else if(this.props.mapMarker.color === 'yellow'){
        markerImage = require('../assets/images/yellow_marker.png')
      }
    }

    const myDream = Object.keys(this.props.mapMarker).length === 0 ? null :
        (
          <MapView.Marker
            coordinate={this.props.mapMarker.latlng}
            key={this.props.mapMarker.id}
            style={styles.markerContainer}
          >
            <View style={styles.bubbleContainer}>
              <View style={styles.bubble}>
              <View style={styles.addressContainer}>
                <Text style={styles.address}> {this.props.mapMarker.address} </Text>
              </View>
              <Text style={styles.date}> {this.props.mapMarker.date} </Text>
              </View>
              <View style={styles.arrowBorder} />
              <View style={styles.arrow} />
            </View>
            <Image
              source={markerImage}
              style={{ width: 40, height: 40}}
            />
          </MapView.Marker>
        )




    return (

      <MapView.Animated style={{ flex:1}}
        region={

          new MapView.AnimatedRegion({
            latitude: this.props.region.latitude,
            longitude: this.props.region.longitude,
            latitudeDelta: this.props.region.latitudeDelta,
            longitudeDelta: this.props.region.longitudeDelta
          })
     }

        provider="google"
      >

        {myDream}

        <MapView.Marker
          coordinate={this.props.userLocation.latlng}
          title={this.props.userLocation.title}
          description={this.props.userLocation.description}
          style={{flexDirection: "column",alignItems: "center"}}

        >

          <Image
            source={require('../assets/images/userLocation.png')}
            style={{ width: 30, height: 30 }}
          />

        </MapView.Marker>

      </MapView.Animated>
    );
  }
}

const styles = StyleSheet.create({
  markerContainer: {
    flexDirection: "column",
    alignItems: "flex-start"
  },
  bubbleContainer: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
  },
  bubble: {
    flex: 0,
    flexDirection: 'column',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 2,
    borderRadius: 6,
    borderColor: 'grey',
    borderWidth: 0.2,
    height:90,
    width:180
  },
  arrow: {
    backgroundColor: 'transparent',
    borderWidth: 10,
    borderColor: 'transparent',
    borderTopColor: 'white',
    alignSelf: 'flex-start',
    marginTop: -21,
    marginLeft: 10
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderWidth: 10,
    borderColor: 'transparent',
    borderTopColor: 'transparent',
    alignSelf: 'flex-start',
    marginTop: -0.5,
    marginLeft: 10
  },
  addressContainer: {
    marginLeft:5,
    marginRight:5,
    borderBottomWidth: 0.2 ,
    borderStyle:"solid",
    borderColor: "grey"
  },
  address: {
    margin: 10,
    fontSize: 13,
    color: "grey",
  },
  date: {
    alignSelf: 'flex-end',
    fontSize: 10,
    color: "grey",
    marginTop: 3
  }
});

