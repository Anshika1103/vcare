import React from "react";
import axios from 'axios'
//import { useState } from "react";
export default function SignIn () {

    const submit = (event)=>{
        const data = new FormData();
        data.append("email",document.getElementById("email").value);
        data.append("password",document.getElementById("password").value);
        axios.post('/signin',{
            baseURL: 'http://localhost:8000',
            headers: {
                'Content-Type': 'multipart/form-data'
              }
        }).then(res=>{
          if(res.data.uid){
           //window.location.href="/";
          }
        }).catch(err=>{
          alert(err);
          alert("Incorrect Username or password");
          console.log(err);
        });
    }
    return (
        <>
        <section className="py-5">
        <div className="container py-5">
            <div className="row mb-4 mb-lg-5">
                <div className="col-md-8 col-xl-6 text-center mx-auto">
                    <p className="fw-bold text-success mb-2">Login</p>
                    <h2 className="fw-bold">Welcome back</h2>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-md-6 col-xl-4">
                    <div className="card">
                        <div className="card-body text-center d-flex flex-column align-items-center">
                            <div className="bs-icon-xl bs-icon-circle bs-icon-primary shadow bs-icon my-4"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-person">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"></path>
                                </svg></div>
                            <form onSubmit={submit} id="signin-form" method="post">
                                <div className="mb-3"><input className="form-control" type="email" id="email" name="email" placeholder="Email"/></div>
                                <div className="mb-3"><input className="form-control" type="password" id="password" name="password" placeholder="Password"/></div>
                                <div className="mb-3"><button className="btn btn-primary shadow d-block w-100" type="submit">Log in</button></div>
                                <p className="text-muted">Forgot your password?</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}