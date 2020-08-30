/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();


function App() {

  const [token,dispatch] = useDataLayerValue();

  useEffect( () => {
    const hash= getTokenFromUrl();
    window.location.hash= '';
    const _token= hash.access_token;
    
    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })
      spotify.setAccessToken(token);

      spotify.getMe().then(user => {
        console.log('User Name is:',user);
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });
    }
    console.log('I have a token =>',_token);
    
  }, []);

  return (
    <div className="app">
      {
        token?(
          <Player spotify={spotify}></Player>
        ) :

        (
          <Login></Login>
        )
      }
    </div>
  );
}

export default App;
