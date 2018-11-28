import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Alert, Image, Animated, Easing } from 'react-native';
import PinDropNotification from '../components/PinDropNotification.js';
import EmailModal from '../components/EmailModal.js'
import {ip,GOOGLE_API} from '../secret.js'
console.disableYellowBox = true;

export default class DreamModeButton extends React.Component {
  constructor() {
    super()
    this.state = {
      modalVisible: false,
      stopAnimation: false,
      emailModalVisible: false,
      confirmed: false
    }
    this.springValue = new Animated.Value(0.3)
  }

  setConfirmed(value) {
    this.setState({
      confirmed: value
    })
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  setEmailModalVisible(visible) {
    this.setState({emailModalVisible: visible})
  }

  // Animation stop and start below

  spring () {
  this.springValue.setValue(0.3)
    Animated.spring(
      this.springValue,
      {
        toValue: 1,
        friction: 1
      }
    ).start(() => {
      if (!this.state.stopAnimation) {
        this.spring()
      }
    })
  }

  stopSpring() {
    this.setState({
      stopAnimation: true
    })
  }

  dropPin() {
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

    var currentDate = year + "/" + month + "/" + day;
    console.log(currentDate)
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.props.currentLocation.latitude},${this.props.currentLocation.longitude}&key=${GOOGLE_API}`)
    .then((result) => result.json())
    .then((result) => {
      let address = result.results[0].formatted_address
      fetch(`http://${ip}:8080/markers`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `name=${this.props.searchTerm2}&name2=${this.props.searchTerm}&lng=${this.props.currentLocation.longitude}&lat=${this.props.currentLocation.latitude}&users_id=2501&date=${currentDate}&address=${address}`,
      });
    })


  }


  render() {


  if (!this.props.withinRadius) {
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
  } else {
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
      shadowColor: '#000',
      shadowOffset: { width: 3, height: 3 },
      shadowOpacity: 0.5,
      shadowRadius: 5,
   }
  }

  if (this.state.modalVisible) {

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
          onPress={() => {
            this.setModalVisible(true)
            this.dropPin()}
          }
          onLongPress={() => this.props.navigation.navigate('Dream')}
          >
          {dreamButton}
        </TouchableOpacity>

        {/* Might want to break the below button into another component */}
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.buttonSecond}>
          <Image source={require('../assets/images/3d-map-icon.png')} style={styles.image} resizeMode="contain"/>
        </TouchableOpacity>
        <PinDropNotification visible={this.state.modalVisible} toggle={this.setModalVisible.bind(this)}
        setWithinRadius={this.props.setWithinRadius} stopSpring={this.stopSpring.bind(this)}
        toggleEmail={this.setEmailModalVisible.bind(this)} confirmed={this.state.confirmed} setConfirmed={this.setConfirmed.bind(this)}/>
        <EmailModal visible={this.state.emailModalVisible} toggle={this.setEmailModalVisible.bind(this)} setConfirmed={this.setConfirmed.bind(this)}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
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