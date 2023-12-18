import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideBar from './components/SideBar'
import Home from './components/Home'
import Profile from "./components/Profile";
import DocMap from "./components/DocMap";
import Disease from "./components/Disease"
import CreatePost from "./components/PostDialog";
import PostDetails from "./components/PostDetails";
import Groups from "./components/Groups";



export default function Main(props) {
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
    changeLinkUrls();

    return (
        <>
            <div id="page-top">
                <div id="wrapper" style={{ overflow: "hidden", height: "100vh" }}>
                    <SideBar profile={props.user} />
                    <div className="d-flex flex-column" id="content-wrapper" style={{ overflowY: "hidden" }}>
                        <div id="content" className="border-top" style={{ height: "calc(100% - 150px)", backgroundColor: "#1F1F1F" }}>
                            <NavBar profile={props.user} />
                            <Router>
                                <Routes>
                                    <Route exact path="/" Component={Home} />
                                    <Route exact path="/profile/:id" Component={Profile} />
                                    <Route exact path="/docmap" Component={DocMap} />
                                    <Route exact path="/diseases" Component={Disease} />
                                    <Route exact path="/groups" Component={Groups} />
                                    <Route exact path="/post/:postId" Component={PostDetails} />
                                    <Route exact path="/post" Component={CreatePost} />
                                    <Route Component={Home} />
                                </Routes>
                            </Router>
                        </div>
                        <Footer />
                    </div><a className="border rounded d-inline scroll-to-top" href="#page-top"><i className="fas fa-angle-up"></i></a>
                </div>
            </div>
        </>
    )
}
