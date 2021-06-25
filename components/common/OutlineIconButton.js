// Utilisation:
// <OutlineIconButton action={function}/>
//   <Icon/>
// </OutlineIconButton>

import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

export const OutlineIconButton = ({ children, action }) => {
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

export const CharButton = ({ children, action }) => {
  if (String(children.type).slice(0,12) === "function Svg") {
    const clone = React.cloneElement(children, {color:'white', height: 15, width: 15}, );
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={action}
          style={styles.smallButtonContainer}>
          {clone}
        </TouchableOpacity>
      </View>
    );
  } else if (String(children.type).slice(0,24) === "function FontAwesomeIcon") {
    const clone = React.cloneElement(children, {color:'white', size: 14}, );
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={action}
          style={styles.smallButtonContainer}>
          {clone}
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <TouchableOpacity
        onPress={action}
        style={styles.smallButtonContainer}>
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
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 20
  },
  smallButtonContainer: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: "orange",
  },
});

