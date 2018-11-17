import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import PinsListSlider from './PinsListSlider.js'
import ListSlider from './ListSlider.js'

export default class DreamScreenButton extends React.Component {

  state = {
    modalVisible: this.props.visible
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View>
        <View style={styles.container}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => this.setModalVisible(!this.state.modalVisible)}
            >
            <Text>Press Me</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => this.props.navigation.goBack()}
            >
            <Text>Go back</Text>
          </TouchableOpacity>
        </View>
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
    backgroundColor: 'white',
    borderTopWidth: 2,
    borderStyle: 'solid',
    borderColor: "#d2d2d2",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
})