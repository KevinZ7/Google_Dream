import React from 'react';
import {View, Button, Text, StyleSheet, Dimensions, ScrollView} from 'react-native';

import SlidingUpPanel from 'rn-sliding-up-panel';



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
              <ScrollView
                style={styles.scrollContainer}
                onTouchEnd={() => this.setState({allowDragging: true})}
                onTouchCancel={() => this.setState({allowDragging: true})}
                onTouchStart={() => this.setState({allowDragging: false})}>
                <Text>Here is the content inside panel</Text>
                <Text>Here is the content inside panel</Text>
                <Text>Here is the content inside panel</Text>
                <Text>Here is the content inside panel</Text>
                <Text>Here is the content inside panel</Text>
                <Text>Here is the content inside panel</Text>
                <Text>Here is the content inside panel</Text>
                <Text>Here is the content inside panel</Text>
                <Text>Here is the content inside panel</Text>
                <Text>Here is the content inside panel</Text>
                <Text>Here is the content inside panel</Text>
                <Text>Here is the content inside panel</Text>
                <Text>Here is the content inside panel</Text>
                <Text>Here is the content inside panel</Text>
                <Text>Here is the content inside panel</Text>
                <Text>Here is the content inside panel</Text>
                <Text>Here is the content inside panel</Text>
                <Text>Here is the content inside panel</Text>
                <Text>Here is the content inside panel</Text>
                <Text>Here is the content inside panel</Text>
                <Text>Here is the content inside panel</Text>
                <Text>Here is the content inside panel</Text>
                <Text>Here is the content inside panel</Text>
                <Text>Here is the content inside panel</Text>
                <Text>Here is the content inside panel</Text>
                <Text>Here is the content inside panel</Text>
              </ScrollView>
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
    zIndex: -1
  },
  slideContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    margin: 20
  }
})