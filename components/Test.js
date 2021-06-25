import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Alert, Image, TextInput } from 'react-native';
import IconButton from './common/IconButton';
import TextButton from './common/TextButton'
import ImageButton from './common/ImageButton'
import CustomInput from './common/CustomInput'
import { Edit } from "react-native-feather";

const Test = ({ navigation }) => {
  const [text, onChangeText] = useState('')

  return (
    <View style={styles.alignIt}>
      <View style={styles.container}>
        <TextButton 
          content="Final version"
          action={() => Alert.alert('ooh yeah')}
        />
        <Text></Text>
        {/* <IconButton action={() => Alert.alert('test')}>
          <Edit/>
        </IconButton> */}
        {/* <ImageButton action={() => Alert.alert('test')}>
          <Image style={{}} source={require('../assets/spotify.jpg')}/>
        </ImageButton> */}
        <CustomInput
          onChangeText={onChangeText}
          value={text}
          placeholder="Input text here"
        />
      </View>
      <View style={styles.alignIt}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  alignIt: {
    backgroundColor: '#fff',
    flex: 3
  },
});

export default Test;