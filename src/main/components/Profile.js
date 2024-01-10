import React, { useState, useEffect} from "react";
import axios from 'axios'
import { useParams } from 'react-router-dom';

export default function Profile() {
    const [user, setUser] = useState(null);
    const {id} = useParams();
    

    useEffect(() => {
        axios.get(`/api/user?uid=${id}`)
            .then(response => {
                setUser(response.data);
            })
            .catch(error => {
                setUser(null);
            });
    }, []);

    return (
            
            <main className="container-fluid profile" style={{ overflowY: "scroll", height: "calc(100% - 80px)"}}>
                <h3 className="clr-accent fw-bold mb-4">Profile</h3>
                <div className="row mb-3">
                    <div className="col-lg-4">
                        <div style={{backgroundColor: "#252525"}} className="card border-0  mb-3">
                            <div className="card-body text-center shadow"><img alt="user" className="rounded-circle mb-3 mt-4" src={ user?`https://storage.googleapis.com/money-flow-410110/${user.profile}`:"assentsMain/img/avatars/avatar1.jpeg"} width="160" height="160" />
                                <div className="mb-3"><button className="btn btn-primary btn-sm" type="button">Change Photo</button></div>
                            </div>
                        </div>
                        <div  style={{backgroundColor: "#252525"}} className="card border-0 shadow mb-4">
                            <div style={{backgroundColor: "#252525"}} className="card-header py-3">
                                <h6 className="clr-accent fw-bold m-0">certificate</h6>
                            </div>
                            {/* https://sandeep-source-redesigned-dollop-vr9w4r4vpqrcx5g5-3000.preview.app.github.dev/ */}
                            <div className="card-body" style={{display:"grid",gridTemplateColumns:"auto",minHeight:"200px",backgroundSize:"100% 100%",backgroundRepeat: "no-repeat"}}>
                            <div>
                            <img style={{width:"100%", height:"100%",objectFit: 'cover'}} src={user?`https://storage.googleapis.com/money-flow-410110/certificates/${user.id}`:"assentsMain/img/avatars/avatar1.jpeg"} />
                            
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        {/* <div className="row mb-3 d-none">
                                <div className="col">
                                    <div className="card text-white bg-primary shadow">
                                        <div className="card-body">
                                            <div className="row mb-2">
                                                <div className="col">
                                                    <p className="m-0">Peformance</p>
                                                    <p className="m-0"><strong>65.2%</strong></p>
                                                </div>
                                                <div className="col-auto"><i className="fas fa-rocket fa-2x"></i></div>
                                            </div>
                                            <p className="text-white-50 small m-0"><i className="fas fa-arrow-up"></i>&nbsp;5% since last month</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card text-white bg-success shadow">
                                        <div className="card-body">
                                            <div className="row mb-2">
                                                <div className="col">
                                                    <p className="m-0">Peformance</p>
                                                    <p className="m-0"><strong>65.2%</strong></p>
                                                </div>
                                                <div className="col-auto"><i className="fas fa-rocket fa-2x"></i></div>
                                            </div>
                                            <p className="text-white-50 small m-0"><i className="fas fa-arrow-up"></i>&nbsp;5% since last month</p>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        <div className="row">
                            <div className="col">
                                <div  style={{backgroundColor: "#252525"}} className="card border-0 shadow mb-3">
                                    <div style={{backgroundColor: "#252525"}} className="card-header py-3">
                                        <p className=" clr-accent m-0 fw-bold">User Settings</p>
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <div className="row">
                                                <div className="col">
                                                    <div className="mb-3"><label className="form-label clr-white" for="username"><strong>Username</strong></label><input className="form-control" type="text" id="username" placeholder="user.name" name="username" value={user?user.email:""} /></div>
                                                </div>
                                                <div className="col">
                                                    <div className="mb-3"><label className="form-label clr-white" for="email"><strong>Email Address</strong></label><input className="form-control" type="email" id="email" placeholder="user@example.com" name="email" value={user?user.email:""}/></div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <div className="mb-3"><label className="form-label clr-white" for="first_name"><strong>Name</strong></label><input className="form-control" type="text" id="first_name" placeholder="John" name="first_name" value={user?user.name:""}/></div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div  style={{backgroundColor: "#252525"}} className="card border-0 shadow">
                                    <div style={{backgroundColor: "#252525"}} className="card-header py-3">
                                        <p className="clr-accent m-0 fw-bold">Contact Settings</p>
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <div className="mb-3"><label className="form-label clr-white" for="address"><strong>Email</strong></label><input className="form-control" type="text" id="address" placeholder="Sunset Blvd, 38" value={user?user.email:""} name="address" /></div>
                                            {/* <div className="row">
                                                    <div className="col">
                                                        <div className="mb-3"><label className="form-label" for="city"><strong>City</strong></label><input className="form-control" type="text" id="city" placeholder="Los Angeles" name="city"/></div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="mb-3"><label className="form-label" for="country"><strong>Country</strong></label><input className="form-control" type="text" id="country" placeholder="USA" name="country"/></div>
                                                    </div>
                                                </div> */}
                                            <div className="mb-3"><button className="btn btn-primary btn-sm" type="submit">Save&nbsp;Settings</button></div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="card shadow mb-5">
                    <div className="card-header py-3">
                        <p className="text-primary m-0 fw-bold">Forum Settings</p>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-6">
                                <form>
                                    <div className="mb-3"><label className="form-label" for="signature"><strong>Signature</strong><br /></label><textarea className="form-control" id="signature" rows="4" name="signature"></textarea></div>
                                    <div className="mb-3">
                                        <div className="form-check form-switch"><input className="form-check-input" type="checkbox" id="formCheck-1" /><label className="form-check-label" for="formCheck-1"><strong>Notify me about new replies</strong></label></div>
                                    </div>
                                    <div className="mb-3"><button className="btn btn-primary btn-sm" type="submit">Save Settings</button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div> */}
            </main>
    )
}