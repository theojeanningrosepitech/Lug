import React from 'react'

export const resume = (token) => {
  fetch('https://api.spotify.com/v1/me/player/play', {
    method: 'PUT',
    headers: {
      Authorization: "Bearer "+JSON.parse(token)
    }
  })
    .catch((error) => { console.error(error) });
}

export const pause = (token) => {
  fetch('https://api.spotify.com/v1/me/player/pause', {
    method: 'PUT',
    headers: {
      // header={"Authorization": "Bearer {}".format("access_token"])} 
      Authorization: "Bearer "+JSON.parse(token)
    }
  })
    .catch((error) => { console.error(error) });
}

export const playSong = (token, songId) => {
  console.log(token, songId)
  fetch('https://api.spotify.com/v1/me/player/play', {
    method: 'PUT',
    headers: {
      Authorization: "Bearer "+JSON.parse(token)
    },
    body: JSON.stringify({
      "uris": ["spotify:track:"+songId]
    })
  })
    .catch((error) => { console.error(error) });
}

export const getStatus = (token) => {
  return fetch('https://api.spotify.com/v1/me/player', {
    method: 'GET',
    headers: {
      Authorization: "Bearer "+JSON.parse(token)
    },
  })
    .then((response) => response.json())
    .then((json) => {
      return (json.is_playing)
    })
    .catch((error) => { console.error(error) });
}

export const getCurrentPhoto = (token) => {
  return fetch('https://api.spotify.com/v1/me/player', {
    method: 'GET',
    headers: {
      Authorization: "Bearer "+JSON.parse(token)
    },
  })
  .then((response) => response.json())
  .then((json) => {
    console.log(json.item.name)
    return (json.item.album.images[0].url)
  })
  .catch((error) => { console.error(error) });
}

export const getCurrentSong = (token) => {
  return fetch('https://api.spotify.com/v1/me/player', {
    method: 'GET',
    headers: {
      Authorization: "Bearer "+JSON.parse(token)
    },
  })
  .then((response) => response.json())
  .then((json) => {
    return ({
      title: json.item.name,
      artist: json.item.artists[0].name,
      liked: false,
      photo: json.item.album.images[0].url,
      id: json.item.id,
    })
  })
  .catch((error) => { console.error(error) });
}