import React, { Component } from "react";
import { StyleSheet, View, Text, Image, ImageBackground, Button } from "react-native";
import TextButton from "./common/TextButton";
import Header from "./common/Header";

const AnalyseMood = ({ navigation }) => {
   return (
    <View style={styles.container}>
      <View>
        <View style={styles.image} >
          <Image
            source={require("../assets/headphone.png")}
            resizeMode="contain"
            style={styles.imageLogo}
          />
        </View>
        <View style={styles.Text1}>
          <Text style={styles.devenezLeader}>
            Analyse du son ambiant en cours...
            Ne pas boucher le micro
          </Text>
        </View>
        <View style={styles.MainButton1}>
          <TextButton content="Go to room" action={() => navigation.push('Room')}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#120841",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  image: {
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  imageLogo: {
    width: 125,
    height: 125,
  },
  Text1: {
    padding: 20,
  },
  devenezLeader: {
    fontFamily: "Roboto_700Bold",
    textAlign: 'center',
    color: 'white',
  },
  devenirLeader: {
    width: 264,
    height: 81,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 20,
    shadowColor: "rgba(228,66,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 1,
    shadowRadius: 10,
    fontFamily: "CarterOne_400Regular",
    color: "rgba(18,8,65,1)",
    textAlign: "center",
  },
  imageLogo: {
    width: 325,
    height: 325,
  },
  Text1: {
    fontFamily: "Roboto_300Light",
    padding: 20,
   },
  devenezLeader: {
   fontFamily: "Roboto_700Bold",
   textAlign: 'center',
   color: 'white'
  },
  SecondaryButton1: {
    marginBottom: 40,
  },
});

export default AnalyseMood;


/* 
import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

export default class App extends React.Component {
  componentDidMount() {
    this.animation.play();
    // Or set a specific startFrame and endFrame with:
    // this.animation.play(30, 120);
  }

  resetAnimation = () => {
    this.animation.reset();
    this.animation.play();
  };

  render() {
    return (
      <View style={styles.animationContainer}>
        <LottieView
          ref={animation => {
            this.animation = animation;
          }}
          style={{
            width: 400,
            height: 400,
            backgroundColor: '#eee',
          }}
          source={require('../assets/speaker-animation.json')}
          // OR find more Lottie files @ https://lottiefiles.com/featured
          // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
        />
        <View style={styles.buttonContainer}>
          <Button title="Restart Animation" onPress={this.resetAnimation} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  buttonContainer: {
    paddingTop: 20,
  },
}); */