import React, {Component} from 'react';
import {Text, TouchableHighlight, View, Alert, StyleSheet} from 'react-native';
import Modal from "react-native-modal";

export default class PinDropNotification extends React.Component {

  render() {
    return (
      <View style={styles.mainContainer}>
        <Modal
          style={styles.modalContainer}
          backdropOpacity={0.50}
          onBackdropPress={() => this.props.toggle(!this.props.visible)}
          isVisible={this.props.visible}>
          <View style={styles.modal}>
            <Text>Notification for after the Pin Drop</Text>
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

});