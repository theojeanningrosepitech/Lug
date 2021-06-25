import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'userData',
  initialState: {
    connected: false,
    user: {
      token: "", 
      email: "",
      id: "",
      pseudo: "",
    },
    spotify_token: "",
    party: {
      id: "",
      code: ""
    }
  },
  reducers: {
    userConnected: (state, action) => {
      state.connected = true;
    },
    setSpotifyToken: (state, action) => {
      state.spotify_token = action.payload;
    },
    setCurrentPartyId: (state, action) => {
      state.party.id = action.payload.idParty;
    },
    setCurrentPartyCode: (state, action) => {
      state.party.code = action.payload.codeParty;
    },
    setUser: (state, action) => {
      state.user.token = action.payload.token;
      state.user.email = action.payload.email;
      state.user.id = action.payload.id;
      state.user.pseudo = action.payload.pseudo; 
    },
  }
})

export const { userConnected, setSpotifyToken, setUser, setCurrentPartyId, setCurrentPartyCode } = userSlice.actions

export default userSlice.reducer