import React, {Component} from 'react';
import {Text, TouchableHighlight, View, Alert, StyleSheet, Button, Dimensions} from 'react-native';
import Modal from "react-native-modal";

export default class PinsListSlider extends React.Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Modal
          style={styles.modal}
          backdropOpacity={0}
          onBackdropPress={() => this.props.toggle(!this.props.visible)}
          isVisible={this.props.visible}>
          <View style={styles.innerContainer}>
              <Text>My Dreams</Text>
          </View>
        </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  modal: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: 'center',
    marginBottom: 50
  },
  innerContainer: {
    backgroundColor: 'white',
    margin: 0,
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.3
  },
});