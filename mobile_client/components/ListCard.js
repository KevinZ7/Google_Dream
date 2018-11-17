import React from 'react';
import {View, Button, Text, StyleSheet, Alert} from 'react-native';

export default class ListCard extends React.Component {
  render() {

    const { id, latlng: {latitude, longitude}, name, type, color, date } = this.props.data

    return (
      <View>
        <Text>{name} - {type} - {date} - {latitude} - {longitude}</Text>
        <Button onPress={() => Alert.alert('!!!')} title="Show"/>
      </View>
    )
  }
}