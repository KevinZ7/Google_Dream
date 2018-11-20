import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { MapView, Location, Permissions } from 'expo';
import GOOGLE_API from '../secret.js';
import DreamScreenButton from './DreamScreenButton.js'





export default class DreamMap extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      myDreams: [
       {
         id: 1,
         latlng: {
           latitude:49.283439,
           longitude:-123.115393
         },
         name: "A&W",
         type: "restaurant",
         color: "red",
         date: "11/12/2018",
         address: "622 burger place, Vancouver, BC V8I 5AL, Canada"
       },
       {
         id: 2,
         latlng: {
           latitude:49.283327,
           longitude:-123.117689
         },
         name: "Dog Park",
         type: "park",
         color: "green",
         date: "11/14/2018",
         address: "10-202 Parkboy Avenue, Vancouver, BC V8D 52L, Canada"
       },
       {
         id: 3,
         latlng: {
           latitude:49.281843,
           longitude:-123.120843
         },
         name: "Walk in clinic",
         type: "health",
         color: "blue",
         date: "11/16/2018",
         address: "2822 medical street, Vancouver, BC V8I SA7, Canada"
       },
        {
         id: 4,
         latlng: {
           latitude:29.975217,
           longitude:31.281101
         },
         name: "El Galla jewllery",
         type: "shopping",
         color: "yellow",
         date: "11/07/2018",
         address: "2 Al Lasilki st. New Maadi, Ezbet Fahmy, El-Basatin, Cairo Governorate, Egypt"
       },
       {
         id: 5,
         latlng: {
           latitude:49.283327,
           longitude:-123.117689
         },
         name: "Dog Park",
         type: "park",
         color: "green",
         date: "11/14/2018",
         address: "10-202 Parkboy Avenue, Vancouver, BC V8D 52L, Canada"
       },
       {
         id: 6,
         latlng: {
           latitude:49.283934,
           longitude: -123.118730
         },
         name: "Farimont",
         type: "lodging",
         color: "blue",
         date: "11/16/2018",
         address: "2822 medical street, Vancouver, BC V8I SA7, Canada"
       }
      ],
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
    console.log(targetRegion)
    this.map.animateToRegion(targetRegion,1000)
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
              <Text style={styles.date}> {this.state.mapMarker.date} </Text>
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

