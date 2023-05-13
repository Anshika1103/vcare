import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import SideBar from './components/SideBar'
import Home from './components/Home'
import Profile from "./components/Profile";
import DocMap from "./components/DocMap";
import Disease from "./components/Disease"
import CreatePost from "./components/PostDialog";

  

export default function Main(props){
    
      
    return (
        <>
        <div id="page-top">
        <div id="wrapper" style={{overflow: "hidden",height: "100vh"}}>
        <SideBar profile={props.user}/>
        <div className="d-flex flex-column" id="content-wrapper" style={{overflowY: "hidden"}}>
            <div id="content" style={{height: "calc(100% - 200px)"}}>
            <NavBar profile={props.user}/>
            <Router>
            <Routes>
                <Route exact path="/" Component={Home}/>
                <Route exact path="/profile/:id" Component={Profile}/>
                <Route exact path="/docmap"  Component={DocMap}/>
                <Route exact path="/diseases" Component={Disease}/>
                <Route exact path="/post" Component={CreatePost}/>
                <Route Component={Home}/>
            </Routes>
            </Router>
            </div>
            <Footer/>
        </div><a className="border rounded d-inline scroll-to-top" href="#page-top"><i className="fas fa-angle-up"></i></a>
        </div>
        </div>
        </>
    )
}
