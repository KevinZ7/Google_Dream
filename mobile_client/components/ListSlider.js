import React from 'react';
import {View, Button, Text, StyleSheet, Dimensions, ScrollView, Alert, FlatList, Animated} from 'react-native';

import SlidingUpPanel from 'rn-sliding-up-panel';
import ListCard from './ListCard.js';

const arr = [
       {
         id: 1,
         latlng: {
           latitude:49.283439,
           longitude:-123.115393
         },
         name: "A&W",
         type: "restaurant",
         color: "red",
         date: "11/12/2018"
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
         date: "11/14/2018"
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
         date: "11/16/2018"
       },
        {
         id: 1,
         latlng: {
           latitude:49.283439,
           longitude:-123.115393
         },
         name: "A&W",
         type: "restaurant",
         color: "red",
         date: "11/12/2018"
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
         date: "11/14/2018"
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
         date: "11/16/2018"
       },
       {
         id: 1,
         latlng: {
           latitude:49.283439,
           longitude:-123.115393
         },
         name: "A&W",
         type: "restaurant",
         color: "red",
         date: "11/12/2018"
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
         date: "11/14/2018"
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
         date: "11/16/2018"
       },
     ]


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
          height={300}
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
                renderItem={({item}) => <ListCard key={item.id} data={item} markerToMap={this.props.markerToMap}/>}
              />

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
    bottom: 350,
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
    margin: 20,
    width: '100%'
  },
  insideContent: {
    alignItems: 'center',
    margin: 20
  }
})