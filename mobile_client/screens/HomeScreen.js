import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from 'react-native';
import DefaultMap from '../components/DefaultMap.js'


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={{flex:1}}>
        <DefaultMap />
      </View>
    )
  }
}