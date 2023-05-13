
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
    // Make a request to your backend to check if the user is authenticated
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
  function changeLinkUrls() {
    // get link tags by their IDs
    const bootstrapCss = document.getElementById('bootstrap-css');
    const fontCss = document.getElementById('font-css');
    const faCss = document.getElementById('fa-css');
    const customCss = document.getElementById('custom-css');
  
    // assign new URLs to href attributes
    bootstrapCss.href = `${process.env.PUBLIC_URL}/assetsMain/bootstrap/css/bootstrap.min.css`;
    fontCss.href = 'https://fonts.googleapis.com/css?family=Inter:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800&display=swap';
    faCss.href = 'https://use.fontawesome.com/releases/v5.12.0/css/all.css';
    customCss.href = `${process.env.PUBLIC_URL}/assetsMain/css/styles.min.css`;
  
    // get script tag by ID
    const customJs = document.getElementById('custom-js');
  
    // assign new URL to src attribute
    customJs.src = `${process.env.PUBLIC_URL}/assetsMain/js/script.min.js`;
  }
  return (
<>
{loading ? (
        <Spinner />
      ) : isAuthenticated ? (
        <>
        {changeLinkUrls()}
        <Main user={userData} />
        </>
      ) : (
        <InfoApp />
      )}
  </>
  );

}

export default App;
