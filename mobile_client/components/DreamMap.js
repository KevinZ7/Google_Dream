import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { MapView, Location, Permissions } from 'expo';
import {GOOGLE_API,ip} from '../secret.js';
import DreamScreenButton from './DreamScreenButton.js'
import moment from 'moment';





export default class DreamMap extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      myDreams: [],
      mapMarker: {},
      region: this.props.region
    }
    this.mapview = MapView
    this.markerToMap = this.markerToMap.bind(this)
    this.animation = this.animation.bind(this)
  }


  markerToMap(marker) {
    this.setState({
      mapMarker: marker,
    })
  }

  animation(targetRegion){
    this.map.animateToRegion(targetRegion,1000)
  }

  componentDidMount() {
    fetch(`http://${ip}:8080/markers/2501`)
    .then((results) => {
      return results.json()
    })
    .then((results) => {
      this.setState({
        myDreams: results
      })
    })
  }


  render() {


    var markerImage
    if(Object.keys(this.state.mapMarker).length > 0){
      if(this.state.mapMarker.color === 'red' ){
        markerImage = require('../assets/images/red_marker.png')
      } else if(this.state.mapMarker.color === 'green'){
        markerImage = require('../assets/images/green_marker.png')
      } else if(this.state.mapMarker.color === 'blue'){
        markerImage = require('../assets/images/blue_marker.png')
      } else if(this.state.mapMarker.color === 'yellow'){
        markerImage = require('../assets/images/yellow_marker.png')
      }
    }

    const myDream = Object.keys(this.state.mapMarker).length === 0 ? null :
        (
          <MapView.Marker
            coordinate={this.state.mapMarker.latlng}
            key={this.state.mapMarker.id}
            style={styles.markerContainer}
          >
            <View style={styles.bubbleContainer}>
              <View style={styles.bubble}>
              <View style={styles.addressContainer}>
                <Text style={styles.address}> {this.state.mapMarker.address} </Text>
              </View>
              <Text style={styles.date}> {moment.utc(this.state.mapMarker.date).format('MM/DD/YYYY')} </Text>
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

      <View style={{flex:1}}>

        <MapView style={{ flex:1}}
          ref={(el) => (this.map = el)}
          initialRegion={this.state.region}
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

        </MapView>

        <DreamScreenButton navigation={this.props.navigation} visible={this.props.visible} myDreams={this.state.myDreams} markerToMap={this.markerToMap} animation={this.animation}/>
      </View>
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
    margin: 12,
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

