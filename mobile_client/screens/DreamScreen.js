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
      myDreams: [
       {
         id: 1,
         latlng: {
           latitude:49.283439,
           longitude:-123.115393
         },
         name: "A&W",
         type: "restaurant",
         color: "red",
         date: "11/12/2018",
         address: "622 burger place, Vancouver, BC V8I 5AL, Canada"
       },
       {
         id: 2,
         latlng: {
           latitude:49.283327,
           longitude:-123.117689
         },
         name: "Dog Park",
         type: "park",
         color: "green",
         date: "11/14/2018",
         address: "10-202 Parkboy Avenue, Vancouver, BC V8D 52L, Canada"
       },
       {
         id: 3,
         latlng: {
           latitude:49.281843,
           longitude:-123.120843
         },
         name: "Walk in clinic",
         type: "health",
         color: "blue",
         date: "11/16/2018",
         address: "2822 medical street, Vancouver, BC V8I SA7, Canada"
       }
      ],
      mapMarker: {}
    }
    this.markerToMap = this.markerToMap.bind(this)
  }

  _getLocationAsync = async () => {
      await Permissions.askAsync(Permissions.LOCATION);
      let location = await Location.getCurrentPositionAsync({});
      this.setState({
        region: {
          latitude: location.coords.latitude - 0.0030,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0122,
          longitudeDelta: 0.0121,
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
      console.log(this.state.region.latitude)
  }

  static navigationOptions = {
    header: null,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  markerToMap(marker) {
    this.setState({
      mapMarker: marker,
      region: {
        latitude: marker.latlng.latitude - 0.0030,
        longitude: marker.latlng.longitude - 0.0020,
        latitudeDelta: 0.0122,
        longitudeDelta: 0.0121
      }
    })
  }




  componentDidMount() {


    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 2000)
    this.setModalVisible(true)
    this._getLocationAsync()

  }

  render() {
    const loading = (<View style={styles.loading}><Loading/></View>)
    const DreamScreenContent = (
      <View style={{flex: 1}}>
        <DreamMap mapMarker= {this.state.mapMarker} region={this.state.region} userLocation={this.state.userLocation}/>
        <DreamScreenButton navigation={this.props.navigation} visible={this.state.modalVisible} myDreams={this.state.myDreams} markerToMap={this.markerToMap}/>
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