import React from "react";
export default function SideBar (){
    return (
        <>
                <nav className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
            <div className="container-fluid d-flex flex-column p-0"><a className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#">
                    <div className="sidebar-brand-icon rotate-n-15"><i className="fas fa-notes-medical"></i></div>
                    <div className="sidebar-brand-text mx-3"><span>docsphere</span></div>
                </a>
                <hr className="sidebar-divider my-0"/>
                <ul className="navbar-nav text-light" id="accordionSidebar">
                    <li className="nav-item"><a className="nav-link active" href="index.html"><i className="fas fa-home"></i><span>Feed</span></a></li>
                    <li className="nav-item"><a className="nav-link" href="profile.html"><i className="fas fa-user"></i><span>Profile</span></a></li>
                    <li className="nav-item"><a className="nav-link" href="table.html"><i className="fas fa-map-marked"></i><span>DocMap</span></a></li>
                    <li className="nav-item"><a className="nav-link" href="login.html"><i className="fas fa-pills"></i><span>Disease</span></a></li>
                    <li className="nav-item"><a className="nav-link" href="register.html"><i className="fas fa-sign-out-alt"></i><span>Sign Out</span></a></li>
                </ul>
                <div className="text-center d-none d-md-inline"><button className="btn rounded-circle border-0" id="sidebarToggle" type="button"></button></div>
            </div>
        </nav>
        </>
    )
}