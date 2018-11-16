import React, {Component} from 'react';
import {Text, TouchableHighlight, View, Alert, StyleSheet, Button} from 'react-native';
import Modal from "react-native-modal";

export default class PinsListSlider extends React.Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Modal
          backdropOpacity={0}
          onBackdropPress={() => this.props.toggle(!this.props.visible)}
          isVisible={this.props.visible}>
          <View style={styles.modal}>
            <Button onPress={() => Alert.alert('Hi')} title="Press me"/>
          </View>
        </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  modal: {
    backgroundColor: 'red',
    justifyContent: "flex-end",
    margin: 0
  }

});