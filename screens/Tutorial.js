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
  TouchableOpacity,
  Linking,
  Button
} from 'react-native';

export default class Tutorial extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground
          source={require('../assets/background.png')}
          style={styles.backgroundImage}>
          <Text style={styles.titleText}>Tutorial</Text>
          <Button onPress={()=>{Linking.openURL("https://www.youtube.com/watch?v=BBz-Jyr23M4")}} color="#382507" title="Click here to view an YouTube tutorial"></Button>
          <TouchableOpacity>
            <Image source={require("../hq720.jpg")} style={styles.button}></Image>
          </TouchableOpacity>
          
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
  button: {
    marginTop: 20,
    marginLeft: 12,
    marginRight: 10,
    width: 300,
    height: 150
  },
    subtitle: {
    backgroundColor: "#382507",
    color: "white",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    margin: 25,
    marginLeft: 10,
    marginRight: 20,
    padding: 20,
    fontWeight: "bold",
    fontSize: 20,
  },
});
