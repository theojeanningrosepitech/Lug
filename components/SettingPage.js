import React, { useState, Component } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
} from "react-native";



import TextButton from "./common/TextButton.js";
import CustomInput from "./common/CustomInput.js";


const SettingPage = ({ route, navigation }) => {
    async function setSetting(_email, _new_email, _new_email_confirm, _mdp, _new_mdp, _new_mdp_confirm, _new_pseudo ) {
        console.log("--- getTrack() ---");
        fetch( 'http://shangrila.pythonanywhere.com/settings',  {
            method: 'POST',
            body: { 
                email: _email,
                new_email: _new_email,
                new_email_confirm: _new_email_confirm,
                mdp: _mdp,
                new_mdp: _new_mdp,
                new_mdp_confirm: _new_mdp_confirm,
                new_pseudo: _new_pseudo,
            }
        })

       
        .then(response => response.json())
        .then((response) => {
            console.log("Server said: " + response);
        });
      }

      const [_email, onChangeEmail] = useState('');
      const [_mdp, onChangeMdp] = useState('');
      const [_pseudo, onChangePseudo] = useState('');
  
  
  


        return (
        <View style={styles.container}> 

        
            <View style={styles.topTitle}> 
                Reglages et informations
            </View>
                <View style={styles.userNameAll}>
                    <View style={styles.userNameTitle}>
                        Ton pseudo
                    </View>
                    <View style={styles.userNamePerso}>
                        <CustomInput useStateFunction={onChangePseudo} useStateValue={_pseudo} placeholder="Bobobo bobo"/>

                    </View>
                    <View style={styles.userNameModify} >
                        Modifier ton pseudo
                    </View>
                </View>


                <View style={styles.userNameAll}>
                    <View style={styles.userNameTitle}>
                     Ton adresse email
                     <CustomInput useStateFunction ={onChangeEmail} useStateValue={_email} placeholder="cocoDu74@caramail.com" />
                    </View>
                    {/* <CustomInput useStateFunction ={onChangeEmail} useStateValue={new_email} placeholder="">
                 
                    <CustomInput useStateFunction ={onChangeEmail} useStateValue={new_email} placeholder="">
                    <CustomInput useStateFunction ={onChangeEmail} useStateValue={new_email} placeholder="">
                    <CustomInput useStateFunction ={onChangeEmail} useStateValue={new_email} placeholder="">
                    */}
                    <View style={styles.userNamePerso}>
                        {/* cocoDu74@caramail.com */}
                    </View>
                    <View style={styles.userNameModify} >
                        Modifier ton mail
                    </View>
                    {/* <CustomInput useStateFunction={onChangeTextPseudo} useStateValue={_new_email} placeholder="Email"/> */}
                </View>

                <View style={styles.userNameAll}>
                    <View style={styles.userNameTitle}>
                        Ton mot de passe </View>

                    <View style={styles.userNamePerso}>
                    <CustomInput useStateFunction={onChangeMdp} useStateValue={_mdp} placeholder="*********"/>
                    </View>
                    <View style={styles.userNameModify} >
                        Modifier ton mdp </View>
                </View>
                
                <TextButton content="Valider" action={() => { 
                setSetting(_email, _mdp, _pseudo )}} />
            {/* Textbutton avec toutes les valeurs possible <TextButton content="Valider les modifications" action={() => { 
                setSetting(_email, _new_email, _new_email_confirm, _mdp, _new_mdp, _new_mdp_confirm, _pseudo _new_pseudo )}} /> */}

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

        topTitle: {
            textAlign: "center",
            textAlignVertical: "center",
            fontWeight: "bold",
            fontSize: 40,
            fontFamily: "Roboto_700Bold",
            marginBottom: 20,
          },

        userNameAll: {
           
            marginLeft: "15%",
            marginRight: "15%",
            minWidth: "60%",
            minHeight: "20%",
            marginBottom: 5,
            marginTop: 15,
            borderBottomColor: 'white',
            borderBottomWidth: 1,
        },

        userNameTitle: {
            fontWeight: "bold",
            justifyContent: "flex-start",
            // flex: 2,
            fontFamily: "Roboto_700Bold",
            marginBottom: 5,

        },

        userNamePerso: {
            // flex: 3,
            paddingLeft: "10%",
       
            fontFamily: "Roboto_700Bold",
            fontSize:16,
          
        },

        userNameModify: {
            fontSize: 10,
            color: "grey",
            // fontWeight: "light",
            // textAlign: 'right',
            paddingLeft: "40%",
            fontFamily: "Roboto_300Light",
            marginTop: 5,
        }
    });      


export default SettingPage
