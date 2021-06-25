import React, { Component, useState } from "react";
import { StyleSheet, View, Text, Image, ImageBackground, Button } from "react-native";
import TextButton from "./common/TextButton";
import Header from "./common/Header";
import CustomInput from "./common/CustomInput.js";
import { useDispatch, useSelector } from 'react-redux';
import { setUser, userConnected, setCurrentPartyId } from '../redux/user';


const JoinRoomCode = ({ navigation }) => {
  var response;
  const [code, onChangeTextCode] = useState('');
//   const [mdp, onChangeTextMdp] = useState('');

  async function loginToRoom (_token, _code) {
    try {
      let response = await fetch(`https://shangrila.pythonanywhere.com/joinParty?token=${_token}&code=${_code}`)
      .then((response) => response.json())
      .then((json) => {
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
    
  var request; 
  
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.user.token);

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.Text1}>
          <Text style={styles.devenezLeader}>
            Rejoins la salle de ton pote !
          </Text>
        </View>
        <View style={styles.MainButton1}>
          <CustomInput useStateFunction={onChangeTextCode} useStateValue={code} placeholder="Le Code de la salle (6 caractères)"/>
        </View>
      </View>

      <View style={styles.SecondaryButton1}>
      <TextButton content="Se rendre dans la salle" action={async () => {
          console.log ("text",code);
          let response = await loginToRoom (token, code);
          console.log("response === ",response);
          if (response.idParty!= null) {
            console.log("resss body === ", response.idParty);
            dispatch(setCurrentPartyId(response));
            //dispatch(userConnected());
            navigation.push('Room'); 
          }
        } 
      }/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#120841",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  image: {
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  imageLogo: {
    width: 325,
    height: 325,
  },
  Text1: {
    padding: 20,
  },
  devenezLeader: {
    fontFamily: "Roboto_700Bold",
    textAlign: 'center',
    color: 'white',
  },
  devenirLeader: {
    width: 264,
    height: 81,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 20,
    shadowColor: "rgba(228,66,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 1,
    shadowRadius: 10,
    fontFamily: "CarterOne_400Regular",
    color: "rgba(18,8,65,1)",
    textAlign: "center",
  },
  imageLogo: {
    width: 325,
    height: 325,
  },
  Text1: {
    fontFamily: "Roboto_300Light",
    padding: 20,
   },
  devenezLeader: {
   fontFamily: "Roboto_700Bold",
   textAlign: 'center',
   color: 'white'
  },
  SecondaryButton1: {
    marginBottom: 40,
  },
});

export default JoinRoomCode;