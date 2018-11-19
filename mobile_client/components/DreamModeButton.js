import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Alert, Image, Animated, Easing } from 'react-native';
import PinDropNotification from '../components/PinDropNotification.js'

export default class DreamModeButton extends React.Component {
  constructor() {
    super()
    this.state = {
      modalVisible: false,
      stopAnimation: false,

    }
    this.springValue = new Animated.Value(0.3)
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  spring () {
  this.springValue.setValue(0.3)
    Animated.spring(
      this.springValue,
      {
        toValue: 1,
        friction: 1
      }
    ).start(() => {
      if (this.state.stopAnimation === false) {
        this.spring()
      }
    })
  }

  stopSpring() {
    this.setState({
      stopAnimation: true
    })
  }

  render() {

  if (this.props.withinRadius === false) {
    styles.button = {
      borderWidth:1,
      borderColor:'#fff',
      width:60,
      height:60,
      backgroundColor:'#fff',
      position: 'absolute',
      bottom: 45,
      right: 70,
      borderRadius:100,
      margin: 20,
      shadowColor: '#4885ed',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 1,
      shadowRadius: 10,
    }
    this.spring()
  }


    const dreamButton = !this.props.withinRadius ?
      <Animated.Image
        style={{
          maxWidth: '100%',
          alignSelf: 'center',
          flex: 1,
          maxHeight: '100%',
          transform: [{scale: this.springValue}] }}
          source={require('../assets/images/logo.png')}
      /> :
      <Image source={require('../assets/images/logo.png')} style={styles.image} resizeMode="contain"/>

    return (
      <View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button}
          onPress={() => this.setModalVisible(true)}
          onLongPress={() => this.props.navigation.navigate('Dream')}
          >
          {dreamButton}
        </TouchableOpacity>

        {/* Might want to break the below button into another component */}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => Alert.alert('Hi')}
          style={styles.buttonSecond}>
          <Image source={require('../assets/images/logo.png')} style={styles.image} resizeMode="contain"/>
        </TouchableOpacity>
        <PinDropNotification visible={this.state.modalVisible} toggle={this.setModalVisible.bind(this)} stopSpring={this.stopSpring.bind(this)}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    borderWidth:1,
    borderColor:'#fff',
    width:60,
    height:60,
    backgroundColor:'#fff',
    position: 'absolute',
    bottom: 45,
    right: 70,
    borderRadius:100,
    margin: 20,
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
   },
  buttonSecond: {
    borderWidth:1,
    borderColor:'#fff',
    width:60,
    height:60,
    backgroundColor:'#fff',
    position: 'absolute',
    bottom: 45,
    right: 0,
    borderRadius:100,
    margin: 20,
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
   },
  image: {
    flex: 1,
    maxWidth: '100%',
    alignSelf: 'center'
  }
})