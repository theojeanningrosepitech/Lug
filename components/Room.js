import React, { useState } from 'react';
import { StyleSheet, Alert, View, Button, Text, Animated, ScrollView, FlatList, TouchableOpacity, Image, ImageBackground, Dimensions } from 'react-native';
import { ThumbsDown, ThumbsUp, Heart, Plus, Minus, Users, UserPlus } from "react-native-feather";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import TransparentIconButton from './common/TransparentIconButton';
import { CharButton } from './common/OutlineIconButton';
import { ActiveMusicTitle, ActiveMusicArtist } from './Music';
import Footer from './common/Footer'
import {playSong, getStatus, getCurrentSong} from './Player'
import { useSelector } from 'react-redux';

const currentSong = {
    title: "Again",
    artist: "YUI",
    liked: false,
    photo: "https://i.scdn.co/image/ab67616d00001e02fdec3ee19da7cd9b1b02ca9c",
    id: "4OQq1bcP12GQQXJNupxqfR",
};

const upNextSongs = [
  {
    title: "Old Town Road",
    artist: "Lil Nas X",
    liked: false,
    photo: "https://i.scdn.co/image/ab67616d00001e02c0e7bf5cdd630f314f20586a",
    id: "0F7FA14euOIX8KcbEturGH"
  },
  {
    title: "Bad Guy",
    artist: "Billie Eilish",
    liked: false,
    photo: "https://i.scdn.co/image/ab67616d00001e0250a3147b4edd7701a876c6ce",
    id: "2Fxmhks0bxGSBdJ92vM42m"
  },
  {
    title: "Billie Jean",
    artist: "Mickeal Jackson",
    liked: false,
    photo: "https://i.scdn.co/image/ab67616d00001e024121faee8df82c526cbab2be",
    id: "5ChkMS8OtdzJeqyybCc9R5"
  },
  {
    title: "Four",
    artist: "Chill Bump",
    liked: false,
    photo: "https://i.scdn.co/image/ab67616d00001e02ebe87a32cbd59019ea78ebef",
    id: "4aR43dhmFwhcUikb5PyUKH"
  },
  {
    title: "Les lacs du connemara",
    artist: "Michel Sardou",
    liked: false,
    photo: "https://i.scdn.co/image/ab67616d00001e028ce9b85d2c378387883c6cc0",
    id: "3vHswuqTNO0hIiW6am0tKB"
  },
  {
    title: "Les démons de minuit",
    artist: "Images",
    liked: false,
    photo: "https://i.scdn.co/image/ab67616d00001e02a54a8acf1bf370b3e0da0376",
    id: "2ShTk16F2cHvhQtHGlxTR7"
  },
  {
    title: "L'aventurier",
    artist: "Indochine",
    liked: false,
    photo: "https://i.scdn.co/image/ab67616d00001e02f80fe67d0f4293be5b8f5251",
    id: "2UC5XnHA1Wn9FjQmbjNca9"
  }
];

const Room = ({ navigation }) => {
  const token = useSelector((state) => state.user.spotify_token);
  const [open, setOpen] = useState(false);
  const [songs, setSongs] = useState(upNextSongs);
  const [song, setSong] = useState(currentSong);
  const [past, setPast] = useState([]);
  const [isLoading, setLoading] = useState(true);
  if (isLoading) {
    setLoading(false)
    getStatus(token).then((status) => {
      if (status === true) {
        getCurrentSong(token).then((res) => {
          if (res.id !== song.id) {
            setSongs([song, ...songs]);
            setSong(res);
          }
        })
      } else {
        playSong(token, song.id);
      }     
    })
  };
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button
          onPress={() => navigation.popToTop()}
          title="Leave"
        />
      ),
    });
  }, [navigation]);
  // const expandAnim = useRef(new Animated.Value(110)).current;

  // const openSeeMore = () => {
  //   Animated.timing(expandAnim, {
  //     toValue: 
  //   })
  // }

  const toggleLikeSongs = (id) => {
    const dup = [...songs];
    const index = dup.findIndex((item) => item.id === id);
    dup[index].liked = !dup[index].liked;
    dup.sort((a, b) => {
      if (a.liked > b.liked) {
        return -1
      } else {
        return 1
      }
    });
    setSongs(dup);
  }

  const songItem = ({item}) => {
    return (
      <View style={styles.upNextSong}>
        <View style={styles.upNextImageContainer}>
          <Image
            style={styles.upNextImage}
            source={{uri: item.photo}}
          />
        </View>
        <View style={styles.upNextInfoContainer}>
          <ActiveMusicTitle>{item.title}</ActiveMusicTitle>
          <ActiveMusicArtist>{item.artist}</ActiveMusicArtist>
        </View>
        <View style={styles.like}>
          <Text style={styles.nbLikes}>{item.liked ? 1 : 0}</Text>
          <TransparentIconButton action={() => toggleLikeSongs(item.id)}>
            {item.liked ? <FontAwesomeIcon icon={ faHeart } /> : <Heart/>}
          </TransparentIconButton>
        </View>
      </View>
    );
  };

  const suggestions = [...songs].filter(item => !item.liked).sort(() => Math.random() - 0.5)
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <ImageBackground style={styles.backgroundImage} blurRadius={25} source={{uri: song.photo}}>
          <ScrollView>
            <View style={styles.content}>
              <View style={styles.roomName}>
                <View style={styles.roomTitleLeft}>
                  <View style={styles.alignUsers}>
                    <Text style={styles.usersNb}>1</Text>
                    <Users style={styles.users}/>
                  </View>
                </View>
                <View style={styles.roomTitleCenter}><ActiveMusicTitle>Anniv de Paul</ActiveMusicTitle></View>
                <View style={styles.roomTitleRight}>
                  <TouchableOpacity onPress={() => Alert.alert('menu')} style={styles.addUsers}>
                    <UserPlus style={styles.users}/>
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity onPress={() => {
                navigation.push("ViewCurrentSong", {"song": song, "setSong": setSong, "songs": songs, "setSongs": setSongs, "past": past, "setPast": setPast});
              }}>
                <Image
                  style={styles.currentSongImage}
                  source={{uri: song.photo}}
                />
              </TouchableOpacity>
              <View style={styles.activeRow}>
                <View style={styles.feeling}>
                  <TransparentIconButton action={() => Alert.alert('test')}>
                    <ThumbsDown/>
                  </TransparentIconButton>
                </View>
                <View style={styles.activeInfo}>
                  <ActiveMusicTitle>{song.title}</ActiveMusicTitle>
                  <ActiveMusicArtist>{song.artist}</ActiveMusicArtist>
                </View>
                <View style={styles.feeling}>
                  <TransparentIconButton action={() => Alert.alert('test')}>
                    <ThumbsUp/>
                  </TransparentIconButton>
                </View>
              </View>
              <View style={styles.advancement}></View>
              <View style={styles.upNext}>
                {!open ?
                  <View style={styles.upNextClosed}>
                    {songs.length > 0 ? <View style={styles.closedFull}>
                      <View style={styles.upNextImageContainer}>
                        <Image
                          style={styles.upNextImage}
                          source={{uri: songs[0].photo}}
                        />
                      </View>
                      <View style={styles.upNextInfoContainer}>
                        <ActiveMusicTitle>{songs[0].title}</ActiveMusicTitle>
                        <ActiveMusicArtist>{songs[0].artist}</ActiveMusicArtist>
                      </View>
                      <View style={styles.like}>
                        <Text style={styles.nbLikes}>{songs[0].liked ? 1 : 0}</Text>
                        <TransparentIconButton action={() => toggleLikeSongs(songs[0].id)}>
                          {songs[0].liked ? <FontAwesomeIcon icon={ faHeart } /> : <Heart/>}
                        </TransparentIconButton>
                      </View>
                    </View> :
                    <View></View>}
                  </View> :
                  <View>
                    <FlatList 
                      data={songs}
                      renderItem={songItem}
                      keyExtractor={item => item.id}
                      style={styles.list}
                    />
                    <View style={styles.voteTitle}><ActiveMusicTitle>Add a like to one of these songs</ActiveMusicTitle></View>
                    {suggestions.length >= 1 ?
                      <View style={styles.voteImages}>
                        <TouchableOpacity onPress={() => toggleLikeSongs(suggestions[0].id)}>
                          <Image
                            style={styles.voteImage}
                            source={{uri: suggestions[0].photo}}
                          />
                        </TouchableOpacity>
                        {suggestions.length >= 2 ?
                          <TouchableOpacity onPress={() => toggleLikeSongs(suggestions[1].id)}>
                            <Image
                              style={styles.voteImage}
                              source={{uri: suggestions[1].photo}}
                            />
                          </TouchableOpacity> :
                        <View style={styles.noVoteImage}></View>
                        }
                        {suggestions.length >= 3 ?
                          <TouchableOpacity onPress={() => toggleLikeSongs(suggestions[2].id)}>
                            <Image
                              style={styles.voteImage}
                              source={{uri: suggestions[2].photo}}
                            />
                          </TouchableOpacity> :
                          <View style={styles.noVoteImage}></View>                  
                        }
                      </View> :
                      <View></View>
                    }
                    {suggestions.length >= 1 ?
                      <View style={styles.voteTitles}>
                        <View style={styles.voteMusicTitle}><ActiveMusicArtist>{suggestions[0].title}</ActiveMusicArtist></View>
                        {suggestions.length >= 2 ?
                          <View style={styles.voteMusicTitle}><ActiveMusicArtist>{suggestions[1].title}</ActiveMusicArtist></View> : 
                          <View style={styles.voteMusicTitle}></View>
                        }
                        {suggestions.length >= 3 ?
                          <View style={styles.voteMusicTitle}><ActiveMusicArtist>{suggestions[2].title}</ActiveMusicArtist></View> :
                          <View style={styles.voteMusicTitle}></View>
                        }
                      </View> :
                      <View style={styles.noVoteTitles}><ActiveMusicArtist>No songs to show...</ActiveMusicArtist></View>
                    }
                  </View>
                }
              </View>
              {!open ?
              <View style={styles.seeMore}>
                <CharButton action={() => setOpen(true)}>
                  <Plus style={{marginLeft: 0.5}}/>
                </CharButton>
              </View>:
              <View style={styles.seeMore}>
                <CharButton action={() => setOpen(false)}>
                  <Minus style={{marginLeft: 0.5}}/>
                </CharButton>
              </View>}
              <View style={styles.moodChange}>
                <View style={styles.moodChangeRow}>
                  <View style={styles.moodChangeItem}></View>
                  <View style={styles.moodChangeItem}></View>
                </View>
                <View style={styles.moodChangeRow}>
                  <View style={styles.moodChangeItem}></View>
                  <View style={styles.moodChangeItem}></View>
                </View>
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
      <Footer title={song.title} artist={song.artist}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E44200',
    alignItems: 'center',
    
  },
  backgroundImage: {
    width: Dimensions.get('window').height,
    height: Dimensions.get('window').height,
  },
  content: {
    backgroundColor: '#rgba(228,66,0,0.3)',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 70,
  },
  roomName: {
    marginTop: 15,
    flexDirection: "row",
    width: "100%",
  },
  roomTitleLeft: {
    flex: 4,
    alignItems: "flex-end",
    justifyContent: "center",

  },
  alignUsers: {
    flexDirection: "row",
    alignItems: "center",
  },
  users: {
    color: "white",
    width: 25,
    height: 25
  },
  addUsers: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  usersNb: {
    fontSize: 15,
    color: "white",
    marginRight: 5,
  },
  roomTitleRight: {
    flex: 4,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  roomTitleCenter: {
    flex: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  currentSongImage: {
    width: 200,
    height: 200,
    marginTop: 15,
  },
  activeRow: {
    flexDirection: "row",
    margin: 10,
  },
  feeling: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  activeInfo: {
    width: 200,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  advancement: {
    width: "80%",
    height: 2,
    backgroundColor: "white",
    margin: 10,
  },
  upNext: {
    width: "100%",
    backgroundColor: "#fff7",
    marginTop: 10,
    padding: 15,
    flex: 1,
  },
  list: {
    height: 285
  },
  upNextClosed: {
  },
  closedFull: {
    flexDirection: "row",
    alignItems: "center",
  },
  upNextImageContainer: {
    marginLeft: 20,
  },
  upNextImage: {
    width: 80,
    height: 80,
  },
  upNextInfoContainer: {
    flexDirection: "column",
    marginLeft: 20,
    width: "45%",
  },
  like: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginRight: 20,
    flexDirection: "row",
  },
  nbLikes: {
    fontSize: 20,
    color: "white",
  },
  seeMore: {
    marginTop: -10,
  },
  upNextSong: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  voteTitle: {
    alignItems: "center",
  },
  voteImages: {
    justifyContent: "space-around",
    flexDirection: "row",
    marginTop: 15,
    marginBottom: 5,
  },
  voteTitles: {
    justifyContent: "space-around",
    flexDirection: "row",
    marginBottom: 15,
  },
  noVoteTitles: {
    marginBottom: 15,
    alignItems: "center",
  },
  voteMusicTitle: {
    width: 110,
    textAlign: "center",
  },
  voteImage: {
    width: 80,
    height: 80,
  },
  noVoteImage: {
    width: 80,
    height: 80,
  },
  moodChange: {
    marginTop: 10,
  },
  moodChangeRow: {
    flexDirection: "row",
  },
  moodChangeItem: {
    width: 150,
    height: 150,
    backgroundColor: "pink",
    margin: 10,
  },
});

export default Room;