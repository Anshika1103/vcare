import logo from './logo.svg';
import './App.css';
import InfoApp  from './infoapp/InfoApp.js'
import { useState } from 'react';
import Main from './main/Main'
import React from 'react';
import axios from 'axios';

const URL = 'http://loaclhost:3000' | process.env.BACKEND_URL;

function App() {
  const {user,setUser} = useState(null);
  axios.get(`${URL}/user`)
  .then(user=>{
    setUser(user);
    console.log(user);
  }).catch(err=>{
    setUser(null);
    console.log(user);
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
