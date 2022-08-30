import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  ImageBackground,
  Platform,
  StatusBar,
  Image,
} from 'react-native';


export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground
          source={require('../assets/background.png')}
          style={styles.backgroundImage}>
          <Text style={styles.titleText}>Guitarist</Text>
          <Image
            source={require('../guitar-icon-png-30.png')}
            style={styles.iconImage}></Image>
          <Text style={styles.subtitleText}>
            Click on the hamburger for more options
          </Text>
          <Text
            style={{
              fontSize: 50,
              color: '#382507',
              fontWeight: 'bold',
              alignSelf: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              marginTop: 10,
              marginRight: 10,
              marginLeft: 10,
            }}>
            Have fun!
          </Text>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain',
  },
  titleText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#382507',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  iconImage: {
    position: 'absolute',
    resizeMode: 'contain',
    height: 270,
    width: 270,
    right: 30,
    top: 70,
  },
  subtitleText: {
    fontSize: 30,
    color: '#382507',
    fontWeight: 'bold',
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 280,
    marginRight: 10,
    marginLeft: 10,
  },
});
