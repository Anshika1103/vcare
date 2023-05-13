import React from "react";
import Contact from "./Contact";

export default function Home() {
    const subscribe=(event)=>{
        event.preventDefault();
        alert("Thanks for subscription. Welcome to DocSphere")
    }
    return (
        <>
       <header className="bg-dark">
        <div className="container pt-4 pt-xl-5">
            <div className="row pt-5">
                <div className="col-md-8 col-xl-6 text-center text-md-start mx-auto">
                    <div className="text-center">
                        <p className="fw-bold text-success mb-2">Collaborate, Learn, Cure</p>
                        <h1 className="fw-bold">Uniting Medical Minds for Better Health</h1>
                    </div>
                </div>
                <div className="col-12 col-lg-10 mx-auto">
                    <div className="position-relative" style={{display: "flex",flexWrap: "wrap",justifyContent: "flex-end"}}>
                        <div style={{position: "relative",flex: "0 0 45%",transform: "translate3d(-15%, 35%, 0)"}}><img className="img-fluid" alt="place" data-bss-parallax="" data-bss-parallax-speed="0.8" src="/assets/img/pexel1.jpg"/></div>
                        <div style={{position: "relative",flex: "0 0 45%",transform: "translate3d(-5%, 20%, 0)"}}><img className="img-fluid" alt="place" data-bss-parallax="" data-bss-parallax-speed="0.4" src="/assets/img/pexel4.jpg"/></div>
                        <div style={{position: "relative",flex: "0 0 45%",transform: "translate3d(0, 0%, 0)"}}><img className="img-fluid" alt="place" data-bss-parallax="" data-bss-parallax-speed="0.25" src="/assets/img/pexel2.jpg"/></div>
                    </div>
                </div>
            </div>
        </div>
       </header>
    <section className="py-5"></section>
    <section>
        <div className="container bg-dark py-5">
            <div className="row">
                <div className="col-md-8 col-xl-6 text-center mx-auto">
                    <p className="fw-bold text-success mb-2">Our Services</p>
                    <h3 className="fw-bold">What we provide for you</h3>
                </div>
            </div>
            <div className="py-5 p-lg-5">
                <div className="row row-cols-1 row-cols-md-2 mx-auto" style={{maxWidth: "900px"}}>
                    <div className="col mb-5">
                        <div className="card shadow-sm">
                            <div className="card-body px-4 py-5 px-md-5">
                                <div className="bs-icon-lg d-flex justify-content-center align-items-center mb-3 bs-icon" style={{top: "1rem",right: "1rem",position: "absolute"}}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-bell text-success">
                                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"></path>
                                    </svg></div>
                                <h5 className="fw-bold card-title">Connect</h5>
                                <p className="text-muted card-text mb-4">DocSphere allows doctors to create a profile, connect with colleagues in their field or specialty, and share information with each other</p><a className="btn btn-primary shadow" type="button" href="/login">Join us</a>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card shadow-sm">
                            <div className="card-body px-4 py-5 px-md-5">
                                <div className="bs-icon-lg d-flex justify-content-center align-items-center mb-3 bs-icon" style={{top: "1rem",right: "1rem",position: "absolute"}}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-newspaper text-success">
                                        <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z"></path>
                                        <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z"></path>
                                    </svg></div>
                                <h5 className="fw-bold card-title">News</h5>
                                <p className="text-muted card-text mb-4">We provides the latest updates and insights on healthcare topics from around the world. Our goal is to keep our readers informed and up-to-date on the most pressing issues in healthcare.</p><button className="btn btn-primary shadow" type="button">Learn more</button>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card shadow-sm">
                            <div className="card-body px-4 py-5 px-md-5">
                                <div className="bs-icon-lg d-flex justify-content-center align-items-center mb-3 bs-icon" style={{top: "1rem",right: "1rem",position: "absolute"}}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-list text-success">
                                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
                                    </svg></div>
                                <h5 className="fw-bold card-title">Disease Mapping</h5>
                                <p className="text-muted card-text mb-4">The Disease mapping provides an interactive platform for users to explore the prevalence and distribution of various diseases around the world. </p><button className="btn btn-primary shadow" type="button">Learn more</button>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card shadow-sm">
                            <div className="card-body px-4 py-5 px-md-5">
                                <div className="bs-icon-lg d-flex justify-content-center align-items-center mb-3 bs-icon"  style={{top: "1rem",right: "1rem",position: "absolute"}}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-vector-pen text-success">
                                        <path fill-rule="evenodd" d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828L10.646.646zm-1.8 2.908-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z"></path>
                                        <path fill-rule="evenodd" d="M2.832 13.228 8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086.086-.026z"></path>
                                    </svg></div>
                                <h5 className="fw-bold card-title">Contribute</h5>
                                <p className="text-muted card-text mb-4">We welcome submissions from healthcare professionals, researchers, patients, and anyone with a passion for advancing healthcare knowledge. </p><button className="btn btn-primary shadow" type="button">Learn more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Contact/>
    <section className="py-5">
        <div className="container">
            <div className="bg-dark border rounded border-dark d-flex flex-column justify-content-between align-items-center flex-lg-row p-4 p-lg-5">
                <div className="text-center text-lg-start py-3 py-lg-1">
                    <h2 className="fw-bold mb-2">Subscribe to our newsletter</h2>
                    <p className="mb-0">Connect with us and let us help you stay healthy</p>
                </div>
                <form className="d-flex justify-content-center flex-wrap flex-lg-nowrap" method="post" onSubmit={subscribe}>
                    <div className="my-2"><input className="border rounded-pill shadow-sm form-control" type="email" name="email" placeholder="Your Email" required/></div>
                    <div className="my-2"><button className="btn btn-primary shadow ms-2" type="submit">Subscribe </button></div>
                </form>
            </div>
        </div>
    </section>
        </>
    )
}