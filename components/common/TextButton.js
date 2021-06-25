// Utilisation:
// <TextButton content="text" action={function}/>

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const TextButton = ({ content, action }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={action}
        style={styles.buttonContainer}>
        <Text style={styles.textButton}>{content}</Text>
      </TouchableOpacity>
    </View>
  );
}
  
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  buttonContainer: {
    backgroundColor: 'rgba(255,255,255,1)',
    width: "70%",
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    shadowColor: "rgba(228,66,0,1)",
    shadowOffset: { width: 3, height: 3 },
    elevation: 30,
    shadowOpacity: 1,
    shadowRadius: 10
  },
  textButton: {
    color:'#120841',
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: "CarterOne_400Regular",
  }
});

export default TextButton;

/* MainButton: {
  width: 264,
  height: 81,
  backgroundColor: "rgba(255,255,255,1)",
  borderRadius: 20,
  shadowColor: "rgba(228,66,0,1)",
  shadowOffset: { width: 3, height: 3 },
  elevation: 30,
  shadowOpacity: 1,
  shadowRadius: 10
}, */