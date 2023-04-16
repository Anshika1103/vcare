
import './App.css';
import InfoApp from './infoapp/InfoApp.js'
import { useState, useEffect } from 'react';
import Main from './main/Main'
import React from 'react';
import axios from 'axios';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Make a request to your backend to check if the user is authenticated
    axios.get('/api/user')
      .then(response => {
        setIsAuthenticated(true);
        setUserData(response.data);
      })
      .catch(error => {
        setIsAuthenticated(false);
        setUserData(null);
      });
  }, []);
  return (
<>
  {
    isAuthenticated ? (
      <Main user={userData} />
    ) : (
      <InfoApp />
    )
  }
  </>
  );

}

export default App;
