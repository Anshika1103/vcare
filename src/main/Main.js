import React, { Profiler } from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import SideBar from './components/SideBar'
import Home from './components/Home'
import Profile from "./components/Profile";

  

export default function Main(){
    function changeStylesheet() {
        const bootstrapLink = document.getElementById('bootstrap-css');
        bootstrapLink.href = `${process.env.PUBLIC_URL}/assetsMain/bootstrap/css/bootstrap.min.css`;
      
        const fontLink = document.getElementById('font-css');
        fontLink.href = 'https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i&amp;display=swap';
      
        const faLink = document.getElementById('fa-css');
        faLink.href = 'https://use.fontawesome.com/releases/v5.12.0/css/all.css';
      
        const customLink = document.getElementById('custom-css');
        customLink.href = `${process.env.PUBLIC_URL}/assetsMain/css/styles.min.css`;

        const scriptLink = document.querySelector(`script[src="${process.env.PUBLIC_URL}/assets/js/script.min.js"`);
        scriptLink.src = `${process.env.PUBLIC_URL}/assetsMain/js/script.min.js`;
      }
    
      changeStylesheet();
    return (
        <>
        <div id="page-top">
        <div id="wrapper" style={{overflow: "hidden",height: "100vh"}}>
        <SideBar/>
        <div className="d-flex flex-column" id="content-wrapper" style={{overflowY: "hidden"}}>
            <div id="content" style={{height: "calc(100% - 200px)"}}>
            <NavBar/>
            <Router>
            <Routes>
                <Route exact path="/" Component={Home}/>
                <Route path="/profile" Component={Profile}/>
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
