import React from 'react';

export default function NavBar(){
    return (
        <nav className="navbar navbar-dark navbar-expand-md sticky-top py-3" id="mainNav">
        <div className="container"><a className="navbar-brand d-flex align-items-center" href="/"><span className="bs-icon-sm bs-icon-circle bs-icon-primary shadow d-flex justify-content-center align-items-center me-2 bs-icon"><i className="fas fa-notes-medical"></i></span><span>DocSphere</span></a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navcol-1">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item"><a className="nav-link active" href="/">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="/services">Services</a></li>
                    <li className="nav-item"><a className="nav-link" href="/contacts">Contacts</a></li>
                </ul><a className="btn btn-primary shadow" role="button" href="signup">Sign up</a>
            </div>
        </div>
      </nav>
    )
}