import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, ScrollView, Text } from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

const { width, height } = Dimensions.get('window');

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.userContainer}>
            <Text style={{ color: 'white' }}>Custom Container</Text>
          </View>
          <View>
            <Text style={{ textAlign: 'center' }}>Swipable Area!</Text>
            <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false} style={{ width: width, height: height * 0.3 }}>
              <View style={styles.sliderItem}>
                <Text style={{ fontSize: 36 }}>213 Followers</Text>
                <Text style={{ fontSize: 36 }}>Any other info...</Text>
              </View>
              <View style={styles.sliderItem}>
                <Text style={{ fontSize: 36 }}>Following 5804</Text>
                <Text style={{ fontSize: 36 }}>Any other info...</Text>
              </View>
            </ScrollView>
            <Text style={{ textAlign: 'center' }}>Swipable Area!</Text>
          </View>
          <View style={{ ...styles.userContainer, backgroundColor: '#4B666F'}}>
            <Text style={{ color: 'white' }}>Custom Container</Text>
          </View>
          <View style={{ ...styles.userContainer, backgroundColor: '#F55D71'}}>
            <Text style={{ color: 'white' }}>Custom Container</Text>
          </View>
          <View style={{ ...styles.userContainer, backgroundColor: '#4B666F' }}>
            <Text style={{ color: 'white' }}>Custom Container</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'column'
  },
  userContainer: {
    height: height * 0.2,
    width: width,
    backgroundColor: 'rgb(245, 87, 108))',
    justifyContent: 'center',
    alignItems: 'center'
  },
  sliderItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    backgroundColor: 'lightblue'
  }

});
