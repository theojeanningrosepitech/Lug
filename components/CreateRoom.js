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
import { useDispatch, useSelector } from 'react-redux';


// import fontStyles from 'assets/fonts/Roboto-Light.ttf';



import TextButton from "./common/TextButton.js";
import CustomInput from "./common/CustomInput.js";
import { setCurrentPartyCode, setCurrentPartyId } from "../redux/user.js";

// {
  /* <IconButton action={function}/>
        <Icon/>
      </IconButton> */
// }

// {
  /* TO DO: le texte du placeholder est généré automatiquement selon le nom spotify du créateur du salon.
Faire comprendre visuellement que l'utilisateur peut simplement cliquer sur suivant sans avoir à rentrer du texte pour le nom de la salle
  */
// }



const CreateRoom = ({ navigation }) => {
  const [textRoom, setTextRoom] = useState("");
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  
  async function getCode (_party_id, _token) {
    try {
      let response = await fetch(`https://shangrila.pythonanywhere.com/code?token=${_token}&party_id=${_party_id}`)
      .then((response) => response.json())
      .then((json) => {
      console.log ("res test fun === ", json)
  
        return ({
          codeParty: json.code,
        })
      })
  .catch((error) => { console.error(error) });
      console.log ("res test fun === ", response)
      return response;
    } catch (error) {
      console.error(error);
    };
  }

  async function setRoomToAp (_creator_id, _name, _token) {
    try {
      let response = await fetch(`https://shangrila.pythonanywhere.com/createParty?token=${_token}&name=${_name}`)
      .then((response) => response.json())
      .then((json) => {
        console.log("json ===== ===== ", json)
        return ({
          idParty: json.party_id, 
          
        })
      })
     
  .catch((error) => { console.error(error) });
      console.log ("res ======!!======",response)
      return response;
    } catch (error) {
      console.error(error);
    };
  
}
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.intitule}>
          <Text style={styles.head}>Devenir leader</Text>
        </View>
        <View style={styles.intitule2}>  
          <Text style={styles.head2}>Connecte ton compte</Text>
        </View>
        <View style={styles.imagerie}>
          <Image
            source={require("../assets/spotify.jpg")}
            resizeMode="contain"
            style={styles.tinyLogo}
            imageStyle={styles.image_imageStyle}
          />
          <Image
            source={require("../assets/deezer.jpg")}
            resizeMode="contain"
            style={styles.tinyLogo}
            imageStyle={styles.image_imageStyle}
          />
        </View>
        <View style={styles.down}>
          <Text style={styles.someText}>Donne un nom à ta salle</Text>
        </View>
        <View>
          {/* <TextInput
            style={styles.someInput}
            placeholder=" Nom d'utilisateur "
            onChangeText={(textRoom) => setTextRoom(textRoom)}
            defaultValue={textRoom}
          /> */}
        </View>
        <CustomInput placeholder="Nom public de la salle"/>
      </View>
      <View style={styles.mainButton}>
        <TextButton
          content="Créer la salle" 
          action={async () => {

            let response = await setRoomToAp(user.id, textRoom, user.token);

            if (response != undefined && response.idParty != undefined) {
              let responseCode = await getCode( response.idParty, user.token)
              dispatch(setCurrentPartyId(response));
              dispatch(setCurrentPartyCode(responseCode));

              navigation.push("InitialMood")
            } else {
              console.log("Put pop up");
            }
          }}  
        />


      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: '#120841',
    justifyContent: "space-between",
    flex: 1,
  },
  flexing: {
    flex: 1,
  },
  intitule: {
    marginTop: 20,
  },
  intitule2: {
    marginTop: 10,
    marginBottom: 60,
  },
  tinyLogo: {
    width: 120,
    height: 120,
  },
  
  head: {
    textAlignVertical: "center",
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    fontFamily: "Roboto_700Bold"
  },
  head2: {
    color: "white",
    textAlignVertical: "center",
    textAlign: "center",
    fontSize: 15,
    fontFamily: "Roboto_300Light"    
  },
  imagerie: {
    flexDirection: "row",
    justifyContent:"space-around",
    marginBottom: 60,
  },
  down: {
    textAlignVertical: "center",
    textAlign: "center",
    marginBottom: 20,
  },
  mainButton: {
    marginBottom: 40,
  },
  someText: {
    padding: 2,
    textAlignVertical: "center",
    textAlign: "center",
    justifyContent: "center",
    color: "white",
  },
  someInput: {
    justifyContent: "flex-end",
    height: 40,
    alignContent: "center",
    padding: 2,
  },

});
 export default CreateRoom;