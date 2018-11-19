import React from 'react';
import {View, Button, Text, StyleSheet, Alert, TouchableOpacity, Image} from 'react-native';

export default class ListCard extends React.Component {

  constructor(props){
    super(props);
    this.onPressHandler = this.onPressHandler.bind(this)
  }

  onPressHandler(){
    const marker = this.props.data
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

    return (
      <TouchableOpacity style={styles.container} onPress={() => this.onPressHandler()}>
          <Image source={require('../assets/images/green_marker.png')} style={styles.image} resizeMode={'contain'}/>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{marker.name}</Text>
            <Text>{marker.type}</Text>
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
    maxHeight: '100%',
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