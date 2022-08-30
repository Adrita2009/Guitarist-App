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
  ScrollView
} from 'react-native';

export default class Chords extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea}/>
        <ImageBackground
          source={require('../assets/background.png')}
          style={styles.backgroundImage}>
          <Text style={styles.titleText}>Chords</Text>
          <Text style={styles.subtitleText}>Click on each chord to hear them</Text>
          <ScrollView>
            <Image source={require("../assets/chords/chord-A.png")} style={styles.img}></Image>
            <Image source={require("../assets/chords/chord-A7.png")} style={styles.img}></Image>
            <Image source={require("../assets/chords/chord-Am.png")} style={styles.img}></Image>
            <Image source={require("../assets/chords/chord-C.png")} style={styles.img}></Image>
            <Image source={require("../assets/chords/chord-C7.png")} style={styles.img}></Image>
            <Image source={require("../assets/chords/chord-D.png")} style={styles.img}></Image>
            <Image source={require("../assets/chords/chord-Dm.png")} style={styles.img}></Image>
            <Image source={require("../assets/chords/chord-E.png")} style={styles.img}></Image>
            <Image source={require("../assets/chords/chord-E7.png")} style={styles.img}></Image>
            <Image source={require("../assets/chords/chord-Em.png")} style={styles.img}></Image>
            <Image source={require("../assets/chords/chord-G.png")} style={styles.img}></Image>
          </ScrollView>
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
  subtitleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
    alignItems: "center",
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor:"#382507",
    padding: 10, 
    borderRadius: 50,
    marginBottom: 20
  },
  img: {
    height: 180,
    width: 180,
    left: 70,
    top: 20,
    bottom: 20,
    resizeMode: 'contain',
  },
});
