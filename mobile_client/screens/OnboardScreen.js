import React, { Component } from 'react';
import {
  StyleSheet,   // CSS-like styles
  Text,         // Renders text
  View,          // Container component
  Image
} from 'react-native';
import OnboardButton from '../components/OnboardButton.js';
import Swiper from '../components/Swiper.js';

export default class Screens extends Component {
  static navigationOptions = {
    header: null,
  }
  render() {
    return (
      <Swiper navigation = {this.props.navigation}>
      {/* First screen */}
      <View style={{flex:1}}>
        <Image style={{flex:1, width: '100%'}} source={require('../assets/images/on-board-screen-v1.png')}/>
        <View style={{position:'absolute', top: 100, bottom: 0, left: 0, right: 0}}>
          <Text style={styles.text}>Have you ever</Text> 
          <Text style={styles.text}>searched for</Text> 
          <Text style={styles.text}>something</Text> 
          <Text style={styles.text}>nearby…</Text>
        </View>
      </View>
      {/* Second screen */}
      <View style={{flex:1}}>
        <Image style={{flex:1, width: '100%'}} source={require('../assets/images/on-board-screen-v2.png')}/>
        <View style={{position:'absolute', top: 400, bottom: 0, left: 0, right: 0}}>
          <Text style={styles.text}>but it was so</Text>
          <Text style={styles.text}>far away?</Text>
        </View>
      </View>
      {/* Third screen */}
      <View style={{flex:1, backgroundColor: '#84DEE9', alignItems: 'center', justifyContent: 'center'}}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Image style={{width: 130, height: 130, marginTop: 150}} source={require('../assets/images/logo.png')} reizeMode='contain'/>
        </View>
        <View style={{position: 'absolute', top: 100, bottom: 0, left: 0, right: 0}}>
          <Text style={styles.textFive}>What if all you had</Text>
          <Text style={styles.textFive}>to do was click</Text>
          <Text style={styles.textFive}>a button…</Text>
        </View>
      </View>
      {/* Fourth screen */}
      <View style={{flex:1}}>
        <Image style={{flex:1, width: '100%'}} source={require('../assets/images/on-board-screen-v4.png')}/>
        <View style={{position:'absolute', top: 100, bottom: 0, left: 50, right: 0}}>
          <Text style={styles.textFour}>and one day it</Text>
          <Text style={styles.textFour}>would appear?</Text>
        </View>
      </View>
      {/* Fifth screen */}
      <View style={{flex:1}}>
        <Image style={{flex:1, width: '100%'}} source={require('../assets/images/on-board-screen-v5.png')}/>
        <View style={{position:'absolute', top: 100, bottom: 0, left: 0, right: 0}}>
          <Text style={styles.textFive}>Welcome to Google</Text>
          <Text style={styles.textFive}>Dream where you</Text>
          <Text style={styles.textFive}>can help build the</Text>
          <Text style={styles.textFive}>community you</Text>
          <Text style={styles.textFive}>imagine</Text>
        </View>
      </View>      
    </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  // Slide styles
  // slide: {
  //   flex: 1,                    // Take up all screen
  //   textAlign: 'left'
  // },
  // // Header styles
  // header: {
  //   color: '#FFFFFF',
  //   fontFamily: 'Avenir',
  //   fontSize: 30,
  //   fontWeight: 'bold',
  //   marginVertical: 15,
  // },
  // Text below header
  text: {
    color: '#FFFFFF',
    fontFamily: 'Avenir',
    fontSize: 32,
    fontWeight: 'bold',
    marginHorizontal: 40,
    textAlign: 'right'
    },
  // Text for fourth image  
  textFour: {
    color: '#1EBEA5',
    fontSize: 32,
    fontWeight: 'bold',
    marginHorizontal: 40,
    textAlign: 'right'
  },
  // Text for fifth image  
  textFive: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
    marginHorizontal: 40,
    textAlign: 'left'
  },  
});