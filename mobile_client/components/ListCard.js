import React from 'react';
import {View, Button, Text, StyleSheet, Alert} from 'react-native';

export default class ListCard extends React.Component {

  onPressHandler(){
    this.props.markerToMap(marker)
  }

  render() {

    const marker = this.props.data

    return (
      <View>
        <Text>{marker.name} - {marker.type} - {marker.date} - {marker.latlng.latitude} - {marker.latlng.longitude}</Text>
        <Button onPress={() => this.props.markerToMap(marker)} title="Show"/>
      </View>
    )
  }
}