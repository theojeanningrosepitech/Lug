import React, { Component, useState } from "react";
import { StyleSheet, View, Text, Image, ImageBackground, Button } from "react-native";
import TextButton from "./common/TextButton";
import Header from "./common/Header";
import CustomInput from "./common/CustomInput.js";
import { useDispatch, useSelector } from 'react-redux';
import { setUser, userConnected } from '../redux/user';


const CreateAccount = ({ navigation }) => {
  var response;
  const [email, onChangeTextEmail] = useState('');
  const [mdp, onChangeTextMdp] = useState('');
  const dispatch = useDispatch();

  async function registerToApi (email, mdp) {
    try {
      let response = await fetch(`https://shangrila.pythonanywhere.com/register?email=${email}&mdp=${mdp}`)
      .then((response) => response.json())
      .then((json) => {
      console.log ("res test fun === ", json)

        return ({
          token: json.token, 
          email: json.user.email,
          id: json.user.user_id,
          pseudo: json.user.pseudo
        })
      })
  .catch((error) => { console.error(error) });
      console.log ("res test fun === ", response)
      return response;
    } catch (error) {
      console.error(error);
    };
  }
    
  var request;
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.Text1}>
          <Text style={styles.devenezLeader}>
            Crée toi un compte
          </Text>
        </View>
        <View style={styles.MainButton1}>
          <CustomInput useStateFunction={onChangeTextEmail} useStateValue={email} placeholder="Email"/>
        </View>
        <View style={styles.MainButton1}>
          <CustomInput useStateFunction={onChangeTextMdp} useStateValue={mdp} placeholder="Mot de passe"/>
        </View>
      </View>
      <View style={styles.SecondaryButton1}>


        <TextButton content="Créer le compte" action={async () => {
          console.log ("text",email);
          let response = await registerToApi(email, mdp);
          console.log("response", response);
          if (response.email!= null && response.token != null) {
            console.log("resss body === ", response.email);
            dispatch(setUser(response));
            //dispatch(userConnected());
            
            navigation.push('ConnectService'); 
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

export default CreateAccount;