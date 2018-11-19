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

  state = {
    withinRadius: true
  }

  setWithinRadius() {
    this.setState((prevState) => {
      return {
        withinRadius: !prevState.withinRadius
      }
    })
  }

  render() {
    return (
      <View style={{flex:1}}>
        <DefaultMap setWithinRadius={this.setWithinRadius.bind(this)}/>
        <DreamModeButton navigation={this.props.navigation} withinRadius={this.state.withinRadius} setWithinRadius={this.setWithinRadius.bind(this)}/>
        <HomeScreenFooter />

      </View>
    )
  }
}