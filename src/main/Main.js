import React, { Profiler } from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import SideBar from './components/SideBar'
import Home from './components/Home'
import Profile from "./components/Profile";

export default function Main(){
    return (
        <>
        <div id="wrapper" style="overflow: hidden;height: 100vh;"></div>
        <SideBar/>
        <div class="d-flex flex-column" id="content-wrapper" style="overflow-y: hidden;">
            <div id="content" style="height: calc(100% - 200px);">
            <NavBar/>
            <Router>
            <Routes>
                <Route exact path="/" Component={Home}/>
                <Route path="/profile" Component={Profile}/>
            </Routes>
        </Router>
            </div>
            <Footer/>
        </div><a class="border rounded d-inline scroll-to-top" href="#page-top"><i class="fas fa-angle-up"></i></a>
        <div/>
        </>
    )
}
