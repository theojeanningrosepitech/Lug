// Utilisation:
// <TransparentIconButton action={function}/>
//   <Icon/>
// </TransparentIconButton>

import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

const TransparentIconButton = ({ children, action }) => {
  if (String(children.type).slice(0,12) === "function Svg") {
    const clone = React.cloneElement(children, {color:'white', height: 30, width: 30}, );
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={action}
          style={styles.buttonContainer}>
          {clone}
        </TouchableOpacity>
      </View>
    );
  } else if (String(children.type).slice(0,24) === "function FontAwesomeIcon") {
    const clone = React.cloneElement(children, {color:'white', size: 28}, );
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={action}
          style={styles.buttonContainer}>
          {clone}
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <TouchableOpacity
        onPress={action}
        style={styles.buttonContainer}>
      </TouchableOpacity>
    );
  }
}
  
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  buttonContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TransparentIconButton;

