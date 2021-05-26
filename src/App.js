import React, { useEffect, useState } from "react";
import './App.css';
import Login from './Login';
import Player from './Player';
import { getTokenFromUrl } from "./spotify"; 
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() { 

  const [token, setToken] = useState(null);
  const [{}, dispatch] = useDataLayerValue();

  // Run code based on a given condition
  useEffect(() => { 
    const hash = getTokenFromUrl(); 
    window.location.hash = "";
    const _token = hash.access_token;

    if(_token){
      setToken(_token);

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {console.log('😀', user)});
    }

    console.log("I HAVE A TOKEN >>>", token)
  }, []);

  return (
    // BEM convention
    <div className="app"> 
      {
        token ? (
          <Player />
        ) : ( 
          <Login />
        ) 
      }
    </div>
  );
}

export default App;
