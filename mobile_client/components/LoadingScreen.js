import React from 'react';
import { Text, View, Image } from "react-native";

export default class Loading extends React.Component {

  render() {
    return(
      <View>
        <Image source={require('../assets/images/logo.png')}/>
        </View>
      )
  }

}