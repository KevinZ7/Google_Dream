import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export default class HomeScreenFooter extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../assets/images/robot-dev.png')} style={styles.image} resizeMode="contain"/>
        <Image source={require('../assets/images/robot-dev.png')} style={styles.image} resizeMode="contain"/>
        <Image source={require('../assets/images/robot-dev.png')} style={styles.image} resizeMode="contain"/>
      </View>
    )
  }
}

const styles = {
  container: {
    position: 'absolute',
    backgroundColor: 'white',
    width: '100%',
    height: 50,
    bottom: 0,
    borderTopWidth: 2,
    borderStyle: 'solid',
    borderColor: "#d2d2d2",
    flexDirection: 'row',
  },
  image: {
    flex: 1,
    maxHeight: '100%'
  }
}