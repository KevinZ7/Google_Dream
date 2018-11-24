import React from 'react';
import { Text, View, Image } from "react-native";

export default class Loading extends React.Component {

  render() {
    return(
      <View style={{backgroundColor: 'white', flex: 1, justifyContent: 'center'}}>
        <Image source={require('../assets/images/loading-hourglass.gif')}/>
        </View>
      )
  }

}