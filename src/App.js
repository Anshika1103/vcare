
import './App.css';
import InfoApp from './infoapp/InfoApp.js'
import { useState, useEffect } from 'react';
import Main from './main/Main'
import React from 'react';
import axios from 'axios';
import Spinner from './Spinner';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const got = false;
  useEffect(() => {
    //Make a request to your backend to check if the user is authenticated
    axios.get('/api/user')
      .then(response => {
        setIsAuthenticated(true);
        setUserData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setIsAuthenticated(false);
        setUserData(null);
        setLoading(false);
      });
  }, []);

  return (
<>
{loading ? (
        <Spinner />
      ) : isAuthenticated ? (
        <Main user={userData} />
      ) : (
        <InfoApp />
      )}
  </>
  );

}

export default App;
