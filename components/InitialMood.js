import React, { useState } from "react";
import { StyleSheet, View, Text, Image, ImageBackground, Button } from "react-native";
import TextButton from "./common/TextButton";
import Header from "./common/Header";

const initialMood = ({ navigation }) => {
  const [one, setOne] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.image} >
        <View style={styles.imageline}>
          <Image
            source={require("../assets/déchirure 2.png")}
            resizeMode="contain"
            style={styles.placeholderimage}
          />
          <Image
            source={require("../assets/déchirure 3.png")}
            resizeMode="contain"
            style={styles.placeholderimage}
          />
        </View>
        <View style={styles.imageline}>
          <Image
            source={require("../assets/déchirure 4.png")}
            resizeMode="contain"
            style={styles.placeholderimage}
          />
          <Image
            source={require("../assets/déchirure 5.png")}
            resizeMode="contain"
            style={styles.placeholderimage}
          />
        </View>
        <View style={styles.imageline}>
          <Image
            source={require("../assets/déchirure 8.png")}
            resizeMode="contain"
            style={styles.placeholderimage}
          />
          <Image
            source={require("../assets/déchirure 1.png")}
            resizeMode="contain"
            style={styles.placeholderimage}
          />
        </View>
      </View>
      <View style={styles.SecondaryButton1}>
        <TextButton content="C'est mon mood" action={() => navigation.push('QRCode')}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  placeholderimage: {
    width: 100,
    height: 100,
    // backgroundColor: 'pink',
    margin: 10,
  },

  container: {
    backgroundColor: "#120841",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: 'center',
    flex: 1,
  },
  image: {
    // justifyContent: 'space-around',
    flexDirection: 'column',
    width: '80%',
  },
  imageline: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  },




  imageLogo: {
    width: 325,
    height: 325,
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
    width: "100%",
  },
});

export default initialMood;