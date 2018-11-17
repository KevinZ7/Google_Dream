import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Loading from '../components/LoadingScreen.js'
import DreamMap from '../components/DefaultMap.js'
import DreamScreenButton from '../components/DreamScreenButton.js'
import ListSlider from '../components/ListSlider.js'

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
      <View style={{flex: 1}}>
        <DreamMap />
        <DreamScreenButton navigation={this.props.navigation} visible={this.state.modalVisible}/>
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
  },
})