// Utilisation:
// <ImageButton action={function}/>
//   <Image style={{}} source={require('../assets/image.jpg')}/>
// </IconButton>

import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

const ImageButton = ({ children, action }) => {
  if (!children || String(children.type.displayName) !== "Image") {
    return (
      <TouchableOpacity
        onPress={action}
        style={styles.buttonContainer}>
      </TouchableOpacity>
    );
  } else {
    const clone = React.cloneElement(children, styles.buttonContainer);
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
    borderRadius: 25,
    borderColor: 'white',
  },
  image: {
    height: 150,
    width: 150,
    position: 'absolute',
  }
});

export default ImageButton;