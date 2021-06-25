import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {Provider} from 'react-redux';
import store from './redux/store';
import { useSelector } from 'react-redux';


import SettingPage from './components/SettingPage'
import UserProfile from './components/UserProfile'
import Test from './components/Test'
import Hub from './components/Hub'
import CreateUser from './components/CreateUser'
import ConnectService from './components/ConnectService'
import JoinRoom from './components/JoinRoom'
import JoinRoomCode from './components/JoinRoomCode'
import CreateRoom from './components/CreateRoom'
import InitialMood from './components/InitialMood'
import QRCode from './components/QRCode'
import Room from './components/Room'
import ViewCurrentSong from './components/ViewCurrentSong'
import FirstTime from './components/FirstTime'
import CreateAccount from './components/CreateAccount'
import ConnectAccount from './components/ConnectAccount'
import AnalyseMood from './components/AnalyseMood'

import AppLoading from 'expo-app-loading';
import { useFonts, Roboto_700Bold, Roboto_300Light } from '@expo-google-fonts/roboto';
import { CarterOne_400Regular } from '@expo-google-fonts/carter-one';

import Header from './components/common/Header';

const Stack = createStackNavigator();


const NavDepo = () => {
  const linking = {
    prefixes: ['https://jukehome.com'],
  };
  const connected = useSelector((state) => state.user.connected);

  return (
    <NavigationContainer>

      {connected === true ?
        <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#120841',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}
        >
          <Stack.Screen name="Hub" component={Hub} options={{title: "What's up?", headerTitle: props => <Header {...props} /> }}/>
          <Stack.Screen name="CreateRoom" component={CreateRoom} options={{title: "Create a Room", headerTitle: props => <Header {...props} />}} />
          <Stack.Screen name="InitialMood" component={InitialMood} options={{title: "Choose the mood", headerTitle: props => <Header {...props} />}} />
          <Stack.Screen name="QRCode" component={QRCode} options={{title: "Here's your code!", headerTitle: props => <Header {...props} />}} />
          <Stack.Screen name="AnalyseMood" component={AnalyseMood} options={{title: "Analysing the room temperature...", headerTitle: props => <Header {...props} />}} />
          <Stack.Screen name="JoinRoom" component={JoinRoom} options={{title: "Join a Room", headerTitle: props => <Header {...props} />}} />
          <Stack.Screen name="JoinRoomCode" component={JoinRoomCode} options={{title: "Join a Room", headerTitle: props => <Header {...props} />}} />
          <Stack.Screen name="Room" component={Room} options={{title: "Room", headerTitle: props => <Header {...props} />}} />
          <Stack.Screen name="ViewCurrentSong" component={ViewCurrentSong} options={{title: "Current Song", headerTitle: props => <Header {...props} />}} />
          
          <Stack.Screen name="UserProfile" component={UserProfile} options={{title: "Your Profile", headerTitle: props => <Header {...props} />}} />
          <Stack.Screen name="SettingPage" component={SettingPage} options={{title: "Your Settings", headerTitle: props => <Header {...props} />}} />
        
        
        </Stack.Navigator> :
        
        <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#120841',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}
        > 
          <Stack.Screen name="FirstTime" component={FirstTime} options={{title: "Welcome", headerTitle: props => <Header {...props} /> }}/>
          <Stack.Screen name="CreateAccount" component={CreateAccount} options={{title: "Create an Account", headerTitle: props => <Header {...props} />}} />
          <Stack.Screen name="ConnectAccount" component={ConnectAccount} options={{title: "Connect to an existing account", headerTitle: props => <Header {...props} />}} />
          <Stack.Screen name="ConnectService" component={ConnectService} options={{title: "Link to Music Services", headerTitle: props => <Header {...props} />}} />
        </Stack.Navigator>
      }
    </NavigationContainer>
  );
}
{/* <Stack.Screen name="Test" component={Test} /> */}
{/* <Stack.Screen name="CreateUser" component={CreateUser} options={{title: "Create an Account", headerTitle: props => <Header {...props} />}} /> */}

const App = () => {
  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_300Light,
    CarterOne_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <NavDepo/>
    </Provider>
  );
}

export default App;