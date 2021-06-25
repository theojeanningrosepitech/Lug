import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export const ActiveMusicTitle = ({ children }) => {
  return (
    <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
      {children}
    </Text>
  );
}

export const ActiveMusicArtist = ({ children }) => {
  return (
    <Text style={styles.artist} numberOfLines={1} ellipsizeMode="tail">
      {children}
    </Text>
  );
}
  
const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    color: "white",
    fontSize: 20,
  },
  artist: {
    color: 'white',
    fontSize: 15,
  }
});


