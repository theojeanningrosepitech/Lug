import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
} from "react-native";

import TextButton from "./common/TextButton";
import Header from "./common/Header";

const UserProfile = ({ route, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileTop}>
        <View style={styles.topTitle}>Profil de Karen</View>

        <View style={styles.topTextImage}>
          <Image
            source={require("../assets/basicWhiteGirl.jpg")}
            resizeMode="contain"
            style={styles.tinyLogo}
            imageStyle={styles.image_imageStyle}
          />

          <View style={styles.topName}>
            


            
           Karen Wilson </View>

          <View style={styles.topDescription}>
            


            
            Modifier mes infos </View>

          {/* <TextButton
      content="join the room" 
      action={() => navigation.push("Room")}
      /> */}
        </View>
      </View>

      <View style={styles.playlistAll}>
        <View style={styles.topName}>  
          Playlists des soirées précédentes  
        </View>
        <View style={styles.onePlaylist}> 

          <View style={styles.imageInPlaylist}>
          <Image 
            source={require("../assets/playlistSoiree.png")}
            resizeMode="contain"
            style={styles.tinyLogo}
            imageStyle={styles.image_imageStyle}
          />
          </View>
    
            <View style={styles.textInPlaylist}>

              <View style={styles.textInPTitle}> 
                Soirée chez Marc
              </View>
              <View style={styles.textInPDate}> 
                25 mars 2021
              </View>

            <View style={styles.textInPDescription}> 
            10 participants
            </View>
       
            </View>
          
        </View>

        <View style={styles.onePlaylist}> 

<View style={styles.imageInPlaylist}>
<Image
  source={require("../assets/playlistSoiree.png")}
  resizeMode="contain"
  style={styles.tinyLogo}
  imageStyle={styles.image_imageStyle}
/>
</View>

  <View style={styles.textInPlaylist}>

    <View style={styles.textInPTitle}> 
      Soirée chez Jean
    </View>
    <View style={styles.textInPDate}> 
      10 fevrier 2021
    </View>

  <View style={styles.textInPDescription}> 
  6 participants
  </View>

  </View>

</View>
      

    
      </View>
      <Text> "blabla"</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#120841",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    flexDirection: "column",
    fontSize: 25,
    padding: 20,
  },

  profileTop: {
    // backgroundColor: "#100891",
    textAlignVertical: "center",
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "red",
    height: "100",
    marginBottom: 20,
    fontFamily: "Roboto_700Bold",
    flex: 2,
    fontSize: 50,
    minWidth: "80%",
  },
  topTitle: {
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "bold",
    fontSize: 30,
    minWidth: "80%",
  },

  topTextImage: {
    alignContent: "center",
    padding: 20,

    flexDirection: "column",
    flex: 2,
    // minHeight: "20%",
  },

  topDescription: {
    textAlign: "center",
    textAlignVertical: "center",
    color: "grey",
    fontSize: 8,
    paddingTop: 5,
  },

  topName: {
    textAlign: "center",
    textAlignVertical: "center",
    color: "white",
    fontSize: 18,
    paddingTop: 5,
    fontWeight: "bold",
    paddingBottom: 5,
  },


  playlistAll: {
    color: "white",

    textAlignVertical: "center",
    textAlign: "center",
    fontSize: 15,
    fontFamily: "Roboto_300Light",
    flex: 2,
    minWidth: "80%",
    minHeight: 430,
    // minHeight: "40%",
    //fontStyle: "bold",
    padding: 20,
  },




  onePlaylist: {
    flexDirection: "row",
    minWidth: 200,
    minHeight: 100,
    flex: 1,
   backgroundColor: "#122841",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    
    // resizeMode: 'contain',

    // flexWrap: 'wrap',

    marginBottom: 20,
  },

  imageInPlaylist: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    flex: 2,
    // backgroundColor: "red",
    // flexBasis: 30,
    padding: 5,
    alignContent: "center",
    textAlignVertical: "center",
    textAlign: "center",

  },

  textInPlaylist:
  {

    // backgroundColor: "purple",
    flexDirection: "column",
    // flexbasis: 70,
    flex: 6,
    borderTopRightRadius: 10,
   // borderBotomRighRadius: 10,
  },

  textInPTitle: {

    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",

  },

  textInPDate: {
    color: "grey",
    fontSize: 9,
    textAlign: "right",
    paddingRight: 20,
  },

  textinPDescription:{
    //fontWeight: "light",
    fontSize: 10,
    textAlign: "center",
    
  },

  imagerie: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 60,
  },

  down: {
    textAlignVertical: "center",
    textAlign: "center",
    marginBottom: 20,
  },

  tinyLogo: {
    minWidth: 150,
    minHeight: 150,
    borderRadius: 50,
    // resizeMode: 'contain',
    justifyContent: "center",
    alignItems: "center",
  },
});

export default UserProfile;
