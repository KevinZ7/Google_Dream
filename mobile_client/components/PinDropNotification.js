import React, {Component} from 'react';
import {Text, TouchableHighlight, View, Alert, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Modal from "react-native-modal";

export default class PinDropNotification extends React.Component {


  handleOnClose () {
    this.props.toggle(!this.props.visible)
    this.props.stopSpring()
    this.props.setWithinRadius(true)
  }



  render() {
    return (
      <View style={styles.mainContainer}>
        <Modal
          style={styles.modalContainer}
          backdropOpacity={0.50}
          onBackdropPress={() => this.handleOnClose()}
          isVisible={this.props.visible}
          onModalHide={() => {
            if (this.props.confirmed) {
              this.props.toggleEmail(true)
              }
            }}>
          <View style={styles.modal}>
            <Image style={styles.image} source={require('../assets/images/logo.png')}/>
            <Text style={styles.titleText}>Notification</Text>
            <Text style={styles.text}>Your dream has been marked!</Text>
            <Text style={styles.text}>Would you like to be notified when your dream comes true?</Text>
            <TouchableOpacity style={styles.button} onPress={() => {
              this.props.setConfirmed(true)
              this.handleOnClose()}}>
              <Text>YES!</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center'
  },
  modal: {
    height: 300,
    width: 300,
    padding: 10,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },
  titleText: {
    padding: 10,
    fontWeight: 'bold'
  },
  text: {
    padding: 10,
    textAlign: 'center'
  },
  image: {
    width: 50,
    height: 50
  },
  button: {
    borderStyle: 'solid',
    borderWidth: 1.5,
    borderColor: '#34A853',
    padding: 10,
    marginTop: 20
  }
});