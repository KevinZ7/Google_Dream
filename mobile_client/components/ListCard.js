import React from 'react';
import {View, Button, Text, StyleSheet, Alert, TouchableOpacity, Image} from 'react-native';

export default class ListCard extends React.Component {

  onPressHandler(){
    this.props.markerToMap(marker)
  }

  render() {

    const marker = this.props.data

    return (
      <TouchableOpacity style={styles.container} onPress={() => this.props.markerToMap(marker)}>
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