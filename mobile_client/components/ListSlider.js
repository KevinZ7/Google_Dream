import React from 'react';
import {View, Button, Text, StyleSheet, Dimensions, ScrollView, Alert, FlatList, Image, TouchableOpacity} from 'react-native';

import SlidingUpPanel from 'rn-sliding-up-panel';
import ListCard from './ListCard.js';

export default class ListSlider extends React.Component {

  state = {
    allowDragging: true
  }

  render() {

    return (
      <View style={styles.container}>
        <SlidingUpPanel
          allowDragging={this.state.allowDragging}
          showBackdrop={true}
          height={450}
          visible={this.props.visible}
          onRequestClose={() => this.props.toggle(false)}>
          <View style={styles.slideContainer}>

              <FlatList
                contentContainerStyle={styles.insideContent}
                style={styles.scrollContainer}
                onTouchEnd={() => this.setState({allowDragging: true})}
                onTouchCancel={() => this.setState({allowDragging: true})}
                onTouchStart={() => this.setState({allowDragging: false})}
                data={this.props.myDreams}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => <ListCard key={item.id} data={item} markerToMap={this.props.markerToMap} animation={this.props.animation}/>}
              />
              <Image source={require('../assets/images/dream_footer_final.png')} style={styles.image}/>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => this.props.navigation.goBack()}
                style={styles.buttonSecond}>
                <Image source={require('../assets/images/logo.png')} style={styles.imageButton} resizeMode="contain"/>
              </TouchableOpacity>
          </View>
        </SlidingUpPanel>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    position: 'absolute',
    width: '100%',
    bottom: 500,
    zIndex: -1,
  },
  slideContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderStyle: 'solid',
    borderColor: "#d2d2d2",
  },
  scrollContainer: {
    flex: 1,
    width: '100%',
    margin: 10
  },
  insideContent: {
    margin: 10,
  },
  image: {
    bottom: -1,
    marginLeft: 20,
    maxWidth: '100%',
    maxHeight: '40%'
  },
  imageButton: {
    flex: 1,
    maxWidth: '100%',
    alignSelf: 'center'
  },
  buttonSecond: {
    borderWidth:1,
    borderColor:'#fff',
    width:60,
    height:60,
    backgroundColor:'#fff',
    position: 'absolute',
    bottom: -10,
    right: 0,
    borderRadius:100,
    margin: 20,
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
   }
})