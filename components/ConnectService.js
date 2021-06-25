
import React, {useState} from 'react';
import { TouchableOpacity, Image, StyleSheet, Text, View, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { userConnected, setSpotifyToken } from '../redux/user';


import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest, ResponseType } from 'expo-auth-session';

WebBrowser.maybeCompleteAuthSession();

const discovery = {
  authorizationEndpoint: 'https://accounts.spotify.com/authorize',
  tokenEndpoint: 'https://accounts.spotify.com/api/token',
};

const ConnectService = ({ navigation }) => {
  const storeToken = useSelector((state) => state.user.spotify_token);
  const dispatch = useDispatch();
 ///TODO: FIX URI Redirection

  const [request, response, promptAsync] = useAuthRequest(
    {
      responseType: ResponseType.Token,
      clientId: '67234dda13844207a07446c5f1672ca6',
      scopes: ['user-read-recently-played', 'user-read-playback-position', 'user-read-email', 'playlist-modify-public', 'user-read-private', 'playlist-read-private', 'user-library-read', 'user-library-modify','user-top-read','playlist-read-collaborative','playlist-modify-private', 'ugc-image-upload', 'user-follow-read', 'user-follow-modify', 'user-read-playback-state', 'user-modify-playback-state', 'user-read-currently-playing'],
      // In order to follow the "Authorization Code Flow" to fetch token after authorizationEndpoint
      // this must be set to false
      usePKCE: false,
      // redirectUri: makeRedirectUri({
      //   scheme: 'jukehome.app://callback'
      //   }),
//      redirectUri: makeRedirectUri({ scheme: 'com.jukehome' }) == null ? makeRedirectUri({ scheme: 'com.jukehome' }) : "http://localhost:19006/callback/"
      redirectUri: makeRedirectUri({ native: 'com.jukehome://callback' })
  
    },
    discovery
  );
  async function getTrack() {
    // const token = JSON.parse(localStorage.getItem('token'));
    const token = JSON.parse(storeToken);
    console.log("--- getTrack() ---");
    fetch( 'https://api.spotify.com/v1/tracks/id=' + token,  {
        method: 'GET',
    })
    .then(response => response.json())
    .then((response) => {
        console.log("Server said: " + response);
    });
  }

  React.useEffect(() => {
    if (response?.type === 'success') {
      console.log(response.url);
      console.log("request  "  +request.url);
      console.log("request  "  +request.codeChallenge);
      const { access_token } = response.params;
      console.log(access_token);
      const token = access_token;
      // localStorage.setItem('token', JSON.stringify(token));
      dispatch(setSpotifyToken(JSON.stringify(token)));
    }
  }, [response]);

  /// 
  const user = useSelector((state) => state.user.user);

  if (response == null || response.type == "dismiss") {
    console.log("user", user)
    return (
      <View style={styles.container}>
        
        {/* <Button
          title='connect to Spotify'
          onPress={() => dispatch(userConnected())}
        /> */}
        <Text style={styles.connectation}> Connect via </Text>
        <View>
          <TouchableOpacity onPress={async ()=> {
              await promptAsync();
            
            }
            
            }>
            <Image
              source={require("../assets/spotifyBlanc.png")}
              resizeMode="contain"
              style={styles.spotLogo}
              imageStyle={styles.image_imageStyle}
            /> 
          </TouchableOpacity>
        </View>
      </View>
    );

  } else {
    console.log("user", user)
    console.log("responsebbbbbb", response)
    return (
      <View style={styles.container}>
        
        {/* <Button
          title='connect to Spotify'
          onPress={() => dispatch(userConnected())}
        /> */}
        <Text style={styles.connectation}> Connect via </Text>
        <View>
          <TouchableOpacity onPress={
            dispatch(userConnected())
            }>
           <Text style={styles.connectation}> GO </Text>

          </TouchableOpacity>
        </View>
      </View>
    );
  }
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
  spotLogo: {
    width: 300,
    height: 90,
  },
  mediumLogo: {
    width: 66,
    height: 90,
  },

  connectation: {
    alignItems: 'center',
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    paddingBottom: 10,
  }
  

});

export default ConnectService;