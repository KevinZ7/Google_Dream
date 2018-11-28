import React, {Component} from 'react';
import {Text, TouchableOpacity, View, Alert, StyleSheet, Image, Modal, TextInput} from 'react-native';

export default class EmailModal extends React.Component {

  state = {
    sent: false
  }

  render() {

    const modalContent = this.state.sent ?
    (<View style={styles.mainContainer}>
      <Text>Thank you, we will notify you!</Text>
      <TouchableOpacity style={styles.button} onPress={() => {
        this.setState({
          sent: false
        })
        this.props.toggle(false)
        this.props.setConfirmed(false)
      }}>
        <Text>DONE</Text>
      </TouchableOpacity>
      </View>)
    :
    (<View style={styles.mainContainer}>
      <Text>Enter your email and we will update you!</Text>
      <TextInput
      style={styles.textInput}
      placeholder="Enter your email!"
      onSubmitEditing={() => this.setState({sent: true})}/>
        <TouchableOpacity onPress={() => {
          this.props.setConfirmed(false)
          this.props.toggle(false)}}>
          <Text>Not this time! I don't believe in dreams!</Text>
        </TouchableOpacity>
      </View>)

    return (
      <View>
        <Modal visible={this.props.visible}>
          {modalContent}
          <Image style={{width: '100%'}} source={require('../assets/images/email-footer.png')}/>
        </Modal>
      </View>
    )

  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'white',
    padding: 10
  },
  button: {
    borderStyle: 'solid',
    borderWidth: 1.5,
    borderColor: '#34A853',
    padding: 10,
    marginTop: 20
  }
})