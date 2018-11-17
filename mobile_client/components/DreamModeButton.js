import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import PinDropNotification from '../components/PinDropNotification.js'

export default class DreamModeButton extends React.Component {

  state = {
    modalVisible: false
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button}
          onPress={() => this.setModalVisible(true)}
          onLongPress={() => this.props.navigation.navigate('Dream')}
          >
          <Image source={require('../assets/images/logo.png')} style={styles.image} resizeMode="contain"/>
        </TouchableOpacity>

        {/* Might want to break the below button into another component */}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => Alert.alert('Hi')}
          style={styles.buttonSecond}>
          <Image source={require('../assets/images/logo.png')} style={styles.image} resizeMode="contain"/>
        </TouchableOpacity>
        <PinDropNotification visible={this.state.modalVisible} toggle={this.setModalVisible.bind(this)} />
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