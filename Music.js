import "./App.css";
import  {useState} from 'react';
import  {useEffect} from 'react';

 function Music(){
  
const [music, setMusic] = useState(null);  
const [error, setError] = useState(null);
const [loading, setLoading] = useState(false);


const token = localStorage.getItem(access_token); 

const requestOptions = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  },
};

        useEffect(() => { 
            setLoading(true)
            fetch(
              `https://api.spotify.com/v1/playlists/3cEYpjA9oz9GiPac4AsH4n/tracks`
            )
              .then((response) => response.json())
              .then(setMusic);
          }, []);
          if (loading) return <h1>Loading...</h1>;
  if (music)
    return ( 
    <pre>{JSON.stringify(music, null, 2)}</pre>
        );
  if (!music) return null;
  return 
    <Music/>;
  
}

export default Music;

