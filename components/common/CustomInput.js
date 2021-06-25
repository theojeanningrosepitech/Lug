// Utilisation:
// <CustomInput onChangeText=useStateFunction value=UseStateValue placeholder="text"/>

import React, {useState} from 'react';
import {StyleSheet, TextInput, View, SafeAreaView } from 'react-native';



const CustomInput = ({ useStateFunction, UseStateValue, placeholder }) => {
  const [isActive, setActive] = useState(false)
  const customStyle = isActive ? styles.customText : {};

  return (
    <SafeAreaView >
      <View style={styles.container}>
      {/* const { isActive } = this.state;
      const customStyle = isActive ? styles.customText : {}; */}

<TextInput
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          style={styles.buttonContainer}
          onChangeText={useStateFunction}
          value={UseStateValue}
          placeholder={placeholder}
          placeholderTextColor={'#D0D0D0'}
        />
      </View>
    </SafeAreaView>
  );
}
  
const styles = StyleSheet.create({
  container: {

    flexDirection: 'row',
    flexWrap:  'wrap',
    justifyContent:  'center',
    alignItems: "center",
  },


  buttonContainer: {
    backgroundColor: '#120841',
    width: "70%",
    height: 45,
    textAlign: 'left',
    borderRadius: 30,
    paddingLeft: 25,
    color: 'white',
    // fontFamily: "Robotto",
    fontSize: 16,
    shadowColor: 'black',
    shadowOffset: {width: 1, height: 3},
    shadowOpacity: 0.9,
    shadowRadius: 5,
   
    textAlignVertical: "bottom",
    justifyContent:  'center',
    alignItems:  'center',
    marginBottom:  15,

    borderWidth:  1.4,
    borderColor: "white",

  },
});

export default CustomInput;