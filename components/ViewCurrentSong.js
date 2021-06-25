import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions } from 'react-native';
import FullFooter from './FullFooter'
import {getCurrentPhoto} from './Player'
import { useSelector } from 'react-redux';

const ViewCurrentSong = ({ route, navigation }) => {
  const token = useSelector((state) => state.user.spotify_token);
  const {song, setSong, songs, setSongs, past, setPast} = route.params
  const [isLoading, setLoading] = useState(true);
  const [photo, setPhoto] = useState(song.photo);
  if (isLoading) {
    setLoading(false);
    getCurrentPhoto(token).then((current) => {
      setPhoto(current);
    })
  };
  return (
    <View style={styles.container}>
      <View style={styles.beg}>
        <Image
          style={styles.backgroundImage}
          source={{uri: photo}}
        />
      </View>
      <FullFooter song={song} setSong={setSong} songs={songs} setSongs={setSongs} past={past} setPast={setPast} setImage={setPhoto}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: "flex-end",
  },
  beg: {
    flex: 1,
    backgroundColor: '#E44200',
    justifyContent: 'flex-start',
    width: "100%",
    paddingBottom: 70,
    alignItems: 'center',
  },
  backgroundImage: {
    width: Dimensions.get('window').height-165,
    height: Dimensions.get('window').height-165,
    backgroundColor: '#E44200',
  },
});

export default ViewCurrentSong;