import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export default class HomeScreenFooter extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.leftText}>SHOW LIST</Text>
        <Text style={styles.rightText}>FILTER</Text>
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
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    maxHeight: '100%'
  },
  leftText: {
    marginLeft: 10,
    color: 'grey',
    fontWeight: 'bold'
  },
  rightText: {
    marginRight: 10,
    color: 'grey',
    fontWeight: 'bold'
  }
}