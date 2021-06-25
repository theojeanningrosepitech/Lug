import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { OutlineIconButton } from './OutlineIconButton';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faDice } from '@fortawesome/free-solid-svg-icons'
import Icon from 'react-native-vector-icons/Entypo';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ActiveMusicTitle, ActiveMusicArtist } from '../Music';

const Footer = ({ navigation, title, artist}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity action={() => Alert.alert("test")} style={styles.buttonContainer}><FontAwesomeIcon icon={ faDice } size={30} color="white"/></TouchableOpacity>
      <View style={styles.centerPiece}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.artist}>{artist}</Text>
        <View style={styles.progressBar}/>
      </View>
      <TouchableOpacity onPress={() => Alert.alert("test")} style={styles.buttonContainer}><Icon name="note" color="white" size={30}/></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#120841',
    width: "100%",
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "row",
    padding: 10,
    height: 90,
    paddingBottom: 35,
    marginTop: -65,
    marginBottom: -25,
    borderRadius: 25,
  },
  buttonContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  centerPiece: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white"
  },
  artist: {
    color: "white",
    fontSize: 14,
    marginBottom: 5,
  },
  progressBar: {
    height: 2,
    width: "100%",
    backgroundColor: "white",
  },
});

export default Footer;