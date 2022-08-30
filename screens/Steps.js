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

export default class Steps extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground
          source={require('../assets/background.png')}
          style={styles.backgroundImage}>
          <Text style={styles.titleText}>Tips</Text>
          <Text style={styles.text}>‣ Learn as much as you can about guitar before buying one</Text>
          <Text style={styles.text}>‣ Practice is needed every day, even for the shortest amount of time</Text>
          <Text style={styles.text}>‣ Have a clear idea of what you want to learn on the guitar</Text>
          <Text style={styles.text}>‣ Record videos of yourself playing so that you can watch your technique from a different angle</Text>
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
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#382507',
    alignSelf: 'left',
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 10
  },
});
