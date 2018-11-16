import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Loading from '../components/LoadingScreen.js'
import PinsListSlider from '../components/PinsListSlider.js'

export default class DreamScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    loading: true,
    modalVisible: false
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 2000)

    this.setModalVisible(true)
  }

  render() {
    const loading = (<View style={styles.loading}><Loading/></View>)
    const DreamScreenContent = (
      <View>
        <Text>Dream Content</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => this.setModalVisible(true)}
            >
            <Text>Press Me</Text>
          </TouchableOpacity>
          <PinsListSlider visible={this.state.modalVisible} toggle={this.setModalVisible.bind(this)}/>
      </View>
      )

    const mainContent = this.state.loading ? loading : DreamScreenContent

    return mainContent
  }
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})