// import React from 'react';
// import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';

// const Hub = ({ navigation }) => {
//   return (
//     <View style={styles.alignIt}>
      
//       <Image
//       style={styles.containImage}
//         source={require('../assets/MainLogo.png')}
//         />
//         <View style={styles.container}>
//         <Button
//           title='DEVENIR LEADER'
//           onPress={() => navigation.push('CreateRoom')}
//         />
//         <Text>Déja Leader ? </Text>
//         <Button style={styles.MainButton}
//           title='Se connecter'
//           onPress={() => navigation.push('JoinRoom')}
//         />
//       </View>
 
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 5,
//     backgroundColor: '#461C86',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontFamily: "Canter Bold"
//   },
//   alignIt: {
//     backgroundColor: '#461C86',
//     flex: 3,
//     fontFamily: "Canter Bold"
//   },
//   containImage: {
//     flex: 1, height: undefined, width: undefined, resizeMode: 'contain' 
//   },
//   MainButton: {
//     flex: 1,
//     fontFamily: "Canter Bold"
//   }

// });

// export default Hub;


import React, { Component } from "react";
import { StyleSheet, View, Text, Image, ImageBackground, Button } from "react-native";
import TextButton from "./common/TextButton";
import Header from "./common/Header";

const FirstTime = ({ navigation }) => {
   return (
    <View style={styles.container}>
      <View>
        <View style={styles.image} >
          <Image
            source={require("../assets/Logo_Lug.png")}
            resizeMode="contain"
            style={styles.imageLogo}
          />
        </View>
        <View style={styles.Text1}>
          <Text style={styles.devenezLeader}>
            Créer toi un compte ou connecte toi à Lug
          </Text>
        </View>
        <View style={styles.MainButton1}>
          <TextButton content="Créer un compte" action={() => navigation.push('CreateAccount')}/>
        </View>
      </View>
      <View style={styles.SecondaryButton1}>
        <TextButton content="Se connecter" action={() => navigation.push('ConnectAccount')}/>
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
  },
});

export default FirstTime;