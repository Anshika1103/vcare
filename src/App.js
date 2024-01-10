
import './App.css';
import InfoApp from './infoapp/InfoApp.js'
import { useState, useEffect } from 'react';
import Main from './main/Main'
import React from 'react';
import axios from 'axios';
import Spinner from './Spinner';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [userData, setUserData] = useState({
    id: 'fw4LTCJoGKYJ82q6IqJwI5rxX9w2',
    name: 'Sandeep Kushwaha',
    email: 'newsandeepkushwaha@gmail.com',
    profession: 'doctor',
    fields_of_interest: 'Research, awareness',
    certificate: null,
    hospital_id: null,
    verification_status: 'unverified',
    profile: 'profiles/fw4LTCJoGKYJ82q6IqJwI5rxX9w2.png',
    
  });
  const [loading, setLoading] = useState(false);
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
