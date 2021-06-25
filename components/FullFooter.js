import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faDice } from '@fortawesome/free-solid-svg-icons'
import Icon from 'react-native-vector-icons/Entypo';
import { Fontisto } from "@expo/vector-icons";
import { TouchableOpacity } from 'react-native-gesture-handler';
import {resume, pause, playSong, getStatus} from './Player'
import { useSelector } from 'react-redux';
import {nextSong, previousSong} from './PlaylistManip'

const FullFooter = ({ navigation, song, setSong, songs, setSongs, past, setPast, setImage}) => {
  const token = useSelector((state) => state.user.spotify_token);
  const [isLoading, setLoading] = useState(true);
  const [active, setActive] = useState(true);
  if (isLoading) {
    setLoading(false);
    setActive(getStatus(token).then((status) => {
      setActive(status);
    }));
  };
  const [copySong, setCopySong] = useState(song);
  const [copySongs, setCopySongs] = useState(songs);
  const [copyPast, setCopyPast] = useState(past);

  console.log(active);
  return (
    <View style={styles.container}>
      <View style={styles.half}>
        <View style={styles.centerPiece}>
          <Text style={styles.music}>{copySong.title} - {copySong.artist}</Text>
          <View style={styles.bar}>
            <View style={styles.progressBar1}/>
            <View style={styles.ball}/>
            <View style={styles.progressBar2}/>
          </View>
          <View style={styles.times}>
            <View style={styles.t1}><Text style={styles.time1}>2:09</Text></View>
            <View style={styles.t2}><Text style={styles.time2}>2:43</Text></View>
          </View>
        </View>
      </View>
      <View style={styles.half2}>
        <TouchableOpacity onPress={() => Alert.alert("test")} style={styles.buttonContainer}><FontAwesomeIcon icon={ faDice } size={30} color="white"/></TouchableOpacity>
        {copyPast.length > 0 ? <TouchableOpacity onPress={() => {
          playSong(token, copyPast[copyPast.length - 1].id);
          previousSong(copySong, setCopySong, copySongs, setCopySongs, copyPast, setCopyPast, setSong, setSongs, setPast);
          setImage(copyPast[copyPast.length - 1].photo)
        }} style={styles.buttonContainer2}><Fontisto name='step-backwrad' size={20} color="#fff"/></TouchableOpacity> :
        <View style={styles.buttonContainer2}><Fontisto name='step-backwrad' size={20} color="#fff8"/></View>}
        {!active ?
          <TouchableOpacity onPress={() => {
            getStatus(token).then((status) => {
              console.log("now play", status, active)
              resume(token);
              setActive(!active);
            })
          }} style={styles.buttonContainer3}><Fontisto name='play' size={20} color="#120841"/></TouchableOpacity> :
          <TouchableOpacity onPress={() => {
            getStatus(token).then((status) => {
              console.log("now pause", status, active)
              pause(token);
              setActive(!active);
            });
          }} style={styles.buttonContainer4}><Fontisto name='pause' size={20} color="#120841"/></TouchableOpacity>
        }
        {copySongs.length > 0 ? <TouchableOpacity onPress={() => {
          playSong(token, copySongs[0].id);
          nextSong(copySong, setCopySong, copySongs, setCopySongs, copyPast, setCopyPast, setSong, setSongs, setPast);
          setImage(copySongs[0].photo)
        }} style={styles.buttonContainer2}><Fontisto name='step-forward' size={20} color="#fff"/></TouchableOpacity> :
        <View style={styles.buttonContainer2}><Fontisto name='step-forward' size={20} color="#fff8"/></View>}
        <TouchableOpacity onPress={() => Alert.alert("test")} style={styles.buttonContainer}><Icon name="note" color="white" size={30}/></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#120841',
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
    padding: 10,
    height: 150,
    paddingBottom: 35,
    marginTop: -65,
    marginBottom: -30,
    borderRadius: 25,
  },
  half: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    marginBottom: 10,
  },
  half2: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: 'space-around'
  },
  buttonContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 20,
  },
  buttonContainer2: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer3: {
    width: 40,
    height: 40,
    backgroundColor: "white",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    paddingLeft: 5,
  },
  buttonContainer4: {
    width: 40,
    height: 40,
    backgroundColor: "white",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    paddingLeft: 0,
  },
  centerPiece: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  music: {
    fontSize: 13,
    color: "#fff8",
    marginBottom: 5,
  },
  bar: {
    flexDirection: 'row',
    flex: 1,
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressBar1: {
    height: 4,
    width: "45%",
    backgroundColor: "white",
    borderRadius: 2,
  },
  progressBar2: {
    height: 4,
    width: "25%",
    backgroundColor: "#fff8",
    borderRadius: 2,
  },
  ball: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    margin: -4,
  },
  times: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '70%',
  },
  t1: {
    flex: 1,
  },
  t2: {
    flex: 1,
    alignItems: 'flex-end'
  },
  time1: {
    fontSize: 13,
    color: "#fff8",
  },
  time2: {
    fontSize: 13,
    color: "#fff8",
  }
});

export default FullFooter;