import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from 'react-native';
import DefaultMap from '../components/DefaultMap.js'
import DreamModeButton from '../components/DreamModeButton.js'
import HomeScreenFooter from '../components/HomeScreenFooter.js'


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };



  render() {
    return (
      <View style={{flex:1}}>
        <DefaultMap  navigation = {this.props.navigation}/>
        <HomeScreenFooter />

      </View>
    )
  }
}