import axios from "axios";
import React from "react";
export default function SideBar (props){
    const signOut = (event)=>{
        axios.get("/api/signout")
        .then(data=>{
            window.location.href="/"
        }).catch((err)=>{
             alert("Some error has occurred");
        });
    }
    return (
        <>
                <nav className="sidebar navbar navbar-dark align-items-start sidebar sidebar-dark accordion p-0">
            <div className="container-fluid d-flex flex-column p-0"><a className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="/">
                    <div className="sidebar-brand-icon rotate-n-15"><i className="fas fa-notes-medical"></i></div>
                    <div className="sidebar-brand-text mx-3"><span>docsphere</span></div>
                </a>
                <hr className="sidebar-divider my-0"/>
                <ul className="navbar-nav text-light" id="accordionSidebar">
                    <li className="nav-item"><a className="nav-link active" href="/"><i className="fas fa-home"></i><span>Feed</span></a></li>
                    <li className="nav-item"><a className="nav-link" href={`/profile/${props.profile.id}`}><i className="fas fa-user"></i><span>Profile</span></a></li>
                    <li className="nav-item"><a className="nav-link" href="/docmap"><i className="fas fa-map-marked"></i><span>DocMap</span></a></li>
                    <li className="nav-item"><a className="nav-link" href="/diseases"><i className="fas fa-pills"></i><span>Disease</span></a></li>
                    <li className="nav-item"><a className="nav-link" href="/groups"><i className="fa fa-users"></i><span>Groups</span></a></li>
                    <li className="nav-item"><a className="nav-link" onClick={signOut} href="/"><i className="fas fa-sign-out-alt"></i><span>Sign Out</span></a></li>
                </ul>
                <div className="text-center d-none d-md-inline"><button className="btn rounded-circle border-0" id="sidebarToggle" type="button"></button></div>
            </div>
        </nav>
        </>
    )
}