import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Loading from '../components/LoadingScreen.js'
import DreamMap from '../components/DreamMap.js'
import DreamScreenButton from '../components/DreamScreenButton.js'
import ListSlider from '../components/ListSlider.js'
import { MapView, Location, Permissions } from 'expo';

export default class DreamScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      modalVisible: false,
    }
  }


  static navigationOptions = {
    header: null,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  _getLocationAsync = async () => {
      await Permissions.askAsync(Permissions.LOCATION);
      let location = await Location.getCurrentPositionAsync({});
      this.setState({
        region: {
          latitude: location.coords.latitude - 0.0030,
          longitude: location.coords.longitude,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        },
        targetRegion: {
          latitude: location.coords.latitude - 0.0030,
          longitude: location.coords.longitude,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        },
        userLocation: {
          latlng: {
            latitude: location.coords.latitude ,
            longitude: location.coords.longitude
          },
          title: "My Location",
          description: "Me"
        }

      });
  }





  componentDidMount() {


    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 10000)
    this.setModalVisible(true)
    this._getLocationAsync()

  }

  render() {
    const loading = (<View style={styles.loading}><Loading/></View>)
    const DreamScreenContent = (

        <DreamMap navigation={this.props.navigation} visible={this.state.modalVisible} region={this.state.region} targetRegion={this.state.targetRegion} userLocation={this.state.userLocation}/>

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