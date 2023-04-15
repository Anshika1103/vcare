import React from "react";
import axios from "axios";

export default function SignUp(){
    const signUp = (event)=>{
        event.preventDefault();
        const formData = new FormData(document.getElementById("signup-form"));
        axios.post('/api/signup', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }).then(response => {
            window.location.href="/";
            console.log(response.data);
          }).catch(error => {
            console.error(error);
        });
    }
    return (
        <>
        <section className="py-5">
        <div className="container py-5">
            <div className="row mb-4 mb-lg-5">
                <div className="col-md-8 col-xl-6 text-center mx-auto">
                    <p className="fw-bold text-success mb-2">Sign up</p>
                    <h2 className="fw-bold">Welcome</h2>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-md-6 col-xl-4">
                    <div className="card">
                        <div className="card-body text-center d-flex flex-column align-items-center">
                            <div className="bs-icon-xl bs-icon-circle bs-icon-primary shadow bs-icon my-4"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-person">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"></path>
                                </svg></div>
                            <form method="post" id="signup-form" onSubmit={signUp}>
                                <div className="mb-3"><input className="form-control" type="email" name="email"  id="email" placeholder="Email"/></div>
                                <div className="mb-3"><input className="form-control" type="password" name="password" id="password" placeholder="Password"/></div>
                                <div className="mb-3"><input className="form-control" type="password" name="cpassword" id="cpassword" placeholder="Confirm Password"/></div>
                                <div className="mb-3"><select className="form-select">
                                        <optgroup label="This is a group">
                                            <option value="12" selected="">This is item 1</option>
                                            <option value="13">This is item 2</option>
                                            <option value="14">This is item 3</option>
                                        </optgroup>
                                    </select></div>
                                <div className="mb-3"><input className="form-control" type="text" name="hospital" id="hospital" placeholder="Hospital"/></div>
                                <div className="mb-3"><input className="form-control" type="text" name="name" id="name" placeholder="Enter your name"/></div>
                                <div className="mb-3"><input className="form-control" type="text" name="interest" id="interest" placeholder="Interests, Comma separated"/></div>
                                <div className="mb-3"><input className="form-control" type="file" name="certificate" id="certificate" placeholder="Upload your certificate" required="true"/></div>
                                <div className="mb-3"><button className="btn btn-primary shadow d-block w-100" type="submit">Sign up</button></div>
                                <p className="text-muted">Already have an account?&nbsp;<a href="/login">Log in</a></p>
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