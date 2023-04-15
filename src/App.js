
import './App.css';
import InfoApp  from './infoapp/InfoApp.js'
import { useState } from 'react';
import Main from './main/Main'
import React from 'react';
import axios from 'axios';

const URL = 'https://sandeep-source-glowing-space-waffle-w44v5pvjxwhgp7x-3000.preview.app.github.dev' | process.env.BACKEND_URL;

function App() {
  const {user,setUser} = useState(null);
  axios.get(`${URL}/api/user`)
  .then(user=>{
    setUser(user);
    alert(user);
  }).catch(err=>{
    setUser(null);
    alert(err);
  });
  if(user){
    return (
      <Main/>
    )
  }else{
    return (
      <InfoApp/>
    )
  }
  
}

export default App;
