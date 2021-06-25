// import React from 'react';
// import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

// const JoinRoom = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Room Code"
//         keyboardType="numeric"
//       />
//         <Button style ={styles.button}
//         title='Scanner un QR Code'
//       />
//       <Button style ={styles.button}
//         title='validate room code'
//         onPress={() => navigation.push('Room')}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#461C86',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },

//   input : {
//     flex: 1,
//     backgroundColor: '#461C86'
//   },

//   button: {
//     flex: 1
//   }
// });

// export default JoinRoom;

import React, { Component, useState, useEffect } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
// import { RNCamera } from 'react-native-camera';
import TextButton from "./common/TextButton"
import CustomInput from "./common/CustomInput"

import { BarCodeScanner } from 'expo-barcode-scanner';

const JoinRoom = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  );
}


/* const JoinRoom = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.rejoindreLaSalle}>
        <Text style={styles.scanUnQrCode1}>Entre le numéro de la salle</Text>
    

    
        <CustomInput

          placeholder="Room Code"
          keyboardType="numeric"
          maxLength={6} />
     

        
          <View>
            <Text style={styles.ou2}>ou</Text>
          </View>

        
          <Text style={styles.scanUnQrCode}>Scan un QR Code</Text>
      </View>
      <View>
        
        <View style={styles.icon2Row} onPress={() => navigation.push('Room')}>
          <FontAwesomeIcon name="camera" style={styles.icon2}></FontAwesomeIcon>
          <MaterialCommunityIconsIcon name="qrcode-scan" style={styles.icon}></MaterialCommunityIconsIcon>
        </View>

        <TextButton content="Rejoindre la salle" action={() => navigation.push('Room')}/>
        </View> */

{/*         <QRCodeScanner
        onRead={this.onSuccess}
        flashMode={RNCamera.Constants.FlashMode.torch}
        topContent={
          <Text style={styles.centerText}>
            Go to{' '}
            <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
            your computer and scan the QR code.
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
        }
      /> */}
{/*     </View>
  );
} */}

 const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#120841",
    padding: 50,
    flexDirection: "column",
    justifyContent: "space-around",
    // alignItems: 'center',
    justifyContent: 'center',
  },

  rejoindreLaSalle: {
    fontFamily: "CarterOne-Regular",
    color: "rgba(18,8,65,1)",
    textAlign: "center",
    fontSize: 24,
    alignItems: 'center',

  },

  input: {
    width: 270,
    height: 80,
    borderWidth: 2,
    borderColor: "rgba(255,255,255,1)",
    borderRadius: 25,
    color: "white",
    textAlign: 'center',
    // placeholderTextColor: "white"
  },

  bas: {
    flex: 3,
  },
  
  icon2: {
    color: "rgba(255,255,255,1)",
    fontSize: 80,
    marginTop: 7
  },

  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 80,
  },

  icon2Row: {
    height: 87,
    flexDirection: "row",
    justifyContent: "space-around",
    textAlign: 'center'
  },


  scanUnQrCode: {
    fontFamily: "Roboto_700Bold",
    color: "rgba(255,255,255,1)",
    height: 30,
    width: 270,
    textAlign: "center",
  },

  scanUnQrCode1: {
    fontFamily: "Roboto_700Bold",
    color: "rgba(255,255,255,1)",
    height: 34,
    width: 270,
    textAlign: "center",
  },

  ou2: {
    fontFamily: "Roboto_700Bold",
    color: "rgba(255,255,255,1)",
    height: 29,
    width: 270,
    textAlign: "center",
  }

}); 

export default JoinRoom;