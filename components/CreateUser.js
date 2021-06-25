import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const CreateUser = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title='create user'
        onPress={() => navigation.push('ConnectService')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#120841',
    // fontFamily: 'Roboto',
    padding: 50,
    alignItems: 'center',
    justifyContent: 'center',


  },
});

export default CreateUser;