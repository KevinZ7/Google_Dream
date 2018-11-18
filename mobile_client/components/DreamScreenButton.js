import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import PinsListSlider from './PinsListSlider.js'
import ListSlider from './ListSlider.js'

export default class DreamScreenButton extends React.Component {

  state = {
    modalVisible: this.props.visible,
    listStatus: true
  }

  setModalVisible(visible) {
    this.setState((prevState) => { return {modalVisible: visible, listStatus: !prevState.listStatus} });
  }

  render() {
    const arrowStatus = this.state.listStatus ?
    <Image source={require('../assets/images/icon_down.png')} style={styles.imageArrow} resizeMode="contain"/> :
    <Image source={require('../assets/images/icon_up.png')} style={styles.imageArrow} resizeMode="contain"/>

    return (
      <View>
        <View style={styles.container}>
          <TouchableOpacity
          style={styles.backButton}
            activeOpacity={0.8}
            onPress={() => this.setModalVisible(!this.state.modalVisible)}
            >
            {arrowStatus}
          </TouchableOpacity>
        </View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => this.props.navigation.goBack()}
            style={styles.buttonSecond}>
            <Image source={require('../assets/images/logo.png')} style={styles.image} resizeMode="contain"/>
          </TouchableOpacity>
        <ListSlider visible={this.state.modalVisible} toggle={this.setModalVisible.bind(this)}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 50,
    backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageArrow: {
    flex: 1,
    width: 30,
    alignSelf: 'center'
  },
  image: {
    flex: 1,
    maxWidth: '100%',
    alignSelf: 'center'
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
    zIndex: -1
   },
})