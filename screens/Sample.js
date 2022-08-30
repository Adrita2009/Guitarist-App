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
  TouchableOpacity
} from 'react-native';
import {Audio} from 'expo-av';

const sample1 = require("../assets/sample_tunes/sakura.mp3")
const sample2 = require("../assets/sample_tunes/in_the_forest.mp3")
const sample3 = require("../assets/sample_tunes/happy.mp3")
const sample4 = require("../assets/sample_tunes/my_life.mp3")

export default class Sample extends Component {

listen1 = async() => {
  await Audio.Sound.createAsync(
    { uri: sample1},
    { shouldPlay: true }
  )
}

listen2 = async() => {
  await Audio.Sound.createAsync(
    { uri: sample2},
    { shouldPlay: true }
  )
}

listen3 = async() => {
  await Audio.Sound.createAsync(
    { uri: sample3},
    { shouldPlay: true }
  )
}

listen4 = async() => {
  await Audio.Sound.createAsync(
    { uri: sample4},
    { shouldPlay: true }
  )
}

pause1 = async() => {
  await Audio.Sound.createAsync(
    { uri: sample1 },
    { shouldPlay: false }
  )
}

pause2 = async() => {
  await Audio.Sound.createAsync(
    { uri: sample2 },
    { shouldPlay: false }
  )
}

pause3 = async() => {
  await Audio.Sound.createAsync(
    { uri: sample3 },
    { shouldPlay: false }
  )
}

pause4 = async() => {
  await Audio.Sound.createAsync(
    { uri: sample4 },
    { shouldPlay: false }
  )
}

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground
          source={require('../assets/background.png')}
          style={styles.backgroundImage}>
          <Text style={styles.titleText}>Sample Tunes</Text>
          <TouchableOpacity style={styles.samples} onPress={this.listen1}>Sample 1: Sakura</TouchableOpacity>
          <TouchableOpacity style={styles.pause} onPress={this.pause1}>Pause</TouchableOpacity>
          <TouchableOpacity style={styles.samples} onPress={this.listen2}>Sample 2: In The Forest</TouchableOpacity>
          <TouchableOpacity style={styles.pause} onPress={this.pause2}>Pause</TouchableOpacity>
          <TouchableOpacity style={styles.samples} onPress={this.listen3}>Sample 3: Happy</TouchableOpacity>
          <TouchableOpacity style={styles.pause} onPress={this.pause3}>Pause</TouchableOpacity>
          <TouchableOpacity style={styles.samples} onPress={this.listen4}>Sample 4: My Life</TouchableOpacity>
          <TouchableOpacity style={styles.pause} onPress={this.pause4}>Pause</TouchableOpacity>
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
  samples: {
    backgroundColor: "#382507",
    color: "white",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
    marginLeft: 10,
    marginRight: 20,
    padding: 20,
    fontWeight: "bold",
    fontSize: 20,
  },
  pause: {
    backgroundColor: "#382507",
    color: "white",
    borderRadius: 70,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 120,
    marginRight: 120,
  }
});
