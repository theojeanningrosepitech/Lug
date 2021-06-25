// Utilisation:
// <IconButton action={function}/>
//   <Icon/>
// </IconButton>

import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';


const IconButton = ({ children, action }) => {
  if (String(children.type).slice(0,12) !== "function Svg") {
    return (
      <TouchableOpacity
        onPress={action}
        style={styles.buttonContainer}>
      </TouchableOpacity>
    );
  } else {
    const clone = React.cloneElement(children, {height: 100, width: 100, color:'black'});
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={action}
          style={styles.buttonContainer}>
          {clone}
        </TouchableOpacity>
      </View>
    );
  }
}
  
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  buttonContainer: {
    backgroundColor: '#9C9C9C',
    width: 125,
    height: 125,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15
    
    
  },
});

export default IconButton;

