import React from 'react';
import {View, Button, Text, StyleSheet, Alert, TouchableOpacity, Image} from 'react-native';
import generateIconImage from '../datahelpers/icon-function.js'

export default class ListCard extends React.Component {

  constructor(props){
    super(props);
    this.onPressHandler = this.onPressHandler.bind(this)
  }

  onPressHandler(){
    const marker = this.props.data
    marker.latlng = {
      latitude: marker.lat,
      longitude: marker.lng
    }
    const animateData = {
      latitude: marker.latlng.latitude - 0.0030,
      longitude: marker.latlng.longitude - 0.0020,
      latitudeDelta: 0.0122,
      longitudeDelta: 0.0121
    }
    this.props.markerToMap(marker);
    this.props.animation(animateData);
  }


  render() {

    const marker = this.props.data
    const imageLink = generateIconImage(marker.type_name)
    const capitalMarkerName = marker.marker_name.split(' ').map((word) => word.charAt(0).toUpperCase() + word.substring(1)).join(' ')
    let capitalTypeName;

    if (marker.type_name !== null) {
      capitalTypeName = marker.type_name.split('_').map((word) => word.charAt(0).toUpperCase() + word.substring(1)).join(' ')
    }

    return (
      <TouchableOpacity style={styles.container} onPress={() => this.onPressHandler()}>
          <Image source={imageLink} style={styles.image} resizeMode={'contain'}/>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{capitalMarkerName}</Text>
            <Text>{capitalTypeName}</Text>
          </View>
          <Text style={styles.dots}>...</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 80,

  },
  text: {
    fontWeight: 'bold'
  },
  image: {
    maxWidth: '15%',
    marginRight: 15,
    alignSelf: 'center'
  },
  textContainer: {
    justifyContent: 'center',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderColor: '#d2d2d2',
    width: '100%'
  },
  dots: {
    marginLeft: 'auto',
    alignSelf: 'center',

  }
})