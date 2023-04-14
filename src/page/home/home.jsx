import React from "react";
import "./Home.css";

import { Link } from "react-router-dom";

const home = () => {
  return (
    <div>
      <>
        <link rel="stylesheet" href="Home.css" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Inter:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800&display=swap"
        />
        <link rel="stylesheet" href="assets/css/styles.min.css" />
      </>

      <>
        <nav
          className="navbar navbar-dark navbar-expand-md sticky-top py-3"
          id="mainNav"
        >
          <div className="container">
            <a className="navbar-brand d-flex align-items-center" href="/">
              <span className="bs-icon-sm bs-icon-circle bs-icon-primary shadow d-flex justify-content-center align-items-center me-2 bs-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="bi bi-bezier"
                >
                  <path
                    fillRule="evenodd"
                    d="M0 10.5A1.5 1.5 0 0 1 1.5 9h1A1.5 1.5 0 0 1 4 10.5v1A1.5 1.5 0 0 1 2.5 13h-1A1.5 1.5 0 0 1 0 11.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm10.5.5A1.5 1.5 0 0 1 13.5 9h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM6 4.5A1.5 1.5 0 0 1 7.5 3h1A1.5 1.5 0 0 1 10 4.5v1A1.5 1.5 0 0 1 8.5 7h-1A1.5 1.5 0 0 1 6 5.5v-1zM7.5 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"
                  />
                  <path d="M6 4.5H1.866a1 1 0 1 0 0 1h2.668A6.517 6.517 0 0 0 1.814 9H2.5c.123 0 .244.015.358.043a5.517 5.517 0 0 1 3.185-3.185A1.503 1.503 0 0 1 6 5.5v-1zm3.957 1.358A1.5 1.5 0 0 0 10 5.5v-1h4.134a1 1 0 1 1 0 1h-2.668a6.517 6.517 0 0 1 2.72 3.5H13.5c-.123 0-.243.015-.358.043a5.517 5.517 0 0 0-3.185-3.185z" />
                </svg>
              </span>
              <span>DocSphere</span>
            </a>
            <button
              data-bs-toggle="collapse"
              className="navbar-toggler"
              data-bs-target="#navcol-1"
            >
              <span className="visually-hidden">Toggle navigation</span>
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navcol-1">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <a className="nav-link active">Home</a>
                </li>
                <li className="nav-item">
                  <Link to="/services" className="nav-link">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">
                    Contact
                  </Link>
                </li>
              </ul>
              <a
                className="btn btn-primary shadow"
                role="button"
                href="signup.html"
              >
                Sign up
              </a>
            </div>
          </div>
        </nav>
        <header className="bg-dark">
          <div className="container pt-4 pt-xl-5">
            <div className="row pt-5">
              <div className="col-md-8 col-xl-6 text-center text-md-start mx-auto">
                <div className="text-center">
                  <p className="fw-bold text-success mb-2">
                    Collaborate, Learn, Cure
                  </p>
                  <h1 className="fw-bold">
                    Uniting Medical Minds for Better Health
                  </h1>
                </div>
              </div>
              <div className="col-12 col-lg-10 mx-auto">
                <div
                  className="position-relative"
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "flex-end",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      flex: "0 0 45%",
                      transform: "translate3d(-15%, 35%, 0)",
                    }}
                  >
                    <img
                      className="img-fluid"
                      data-bss-parallax=""
                      data-bss-parallax-speed="0.8"
                      src="assets/img/products/3.jpg"
                    />
                  </div>
                  <div
                    style={{
                      position: "relative",
                      flex: "0 0 45%",
                      transform: "translate3d(-5%, 20%, 0)",
                    }}
                  >
                    <img
                      className="img-fluid"
                      data-bss-parallax=""
                      data-bss-parallax-speed="0.4"
                      src="assets/img/products/2.jpg"
                    />
                  </div>
                  <div
                    style={{
                      position: "relative",
                      flex: "0 0 60%",
                      transform: "translate3d(0, 0%, 0)",
                    }}
                  >
                    <img
                      className="img-fluid"
                      data-bss-parallax=""
                      data-bss-parallax-speed="0.25"
                      src="assets/img/products/1.jpg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section className="py-5" />
        <section>
          <div className="container bg-dark py-5">
            <div className="row">
              <div className="col-md-8 col-xl-6 text-center mx-auto">
                <p className="fw-bold text-success mb-2">Our Services</p>
                <h3 className="fw-bold">What we provide for you</h3>
              </div>
            </div>
            <div className="py-5 p-lg-5">
              <div
                className="row row-cols-1 row-cols-md-2 mx-auto"
                style={{ maxWidth: 900 }}
              >
                <div className="col mb-5">
                  <div className="card shadow-sm">
                    <div className="card-body px-4 py-5 px-md-5">
                      <div
                        className="bs-icon-lg d-flex justify-content-center align-items-center mb-3 bs-icon"
                        style={{
                          top: "1rem",
                          right: "1rem",
                          position: "absolute",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          className="bi bi-bell text-success"
                        >
                          <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                        </svg>
                      </div>
                      <h5 className="fw-bold card-title">Connect</h5>
                      <p className="text-muted card-text mb-4">
                        vCare allows doctors to create a profile, connect with
                        colleagues in their field or specialty, and share
                        information with each other
                      </p>
                      <button className="btn btn-primary shadow" type="button">
                        Learn more
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col mb-5">
                  <div className="card shadow-sm">
                    <div className="card-body px-4 py-5 px-md-5">
                      <div
                        className="bs-icon-lg d-flex justify-content-center align-items-center mb-3 bs-icon"
                        style={{
                          top: "1rem",
                          right: "1rem",
                          position: "absolute",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          className="bi bi-newspaper text-success"
                        >
                          <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z" />
                          <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z" />
                        </svg>
                      </div>
                      <h5 className="fw-bold card-title">News</h5>
                      <p className="text-muted card-text mb-4">
                        Users on Docsphare can share their research, clinical
                        experiences, opinions, and questions related to various
                        diseases and medical topics
                      </p>
                      <button className="btn btn-primary shadow" type="button">
                        Learn more
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col mb-4">
                  <div className="card shadow-sm">
                    <div className="card-body px-4 py-5 px-md-5">
                      <div
                        className="bs-icon-lg d-flex justify-content-center align-items-center mb-3 bs-icon"
                        style={{
                          top: "1rem",
                          right: "1rem",
                          position: "absolute",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          className="bi bi-list text-success"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                          />
                        </svg>
                      </div>
                      <h5 className="fw-bold card-title">Disease Mapping</h5>
                      <p className="text-muted card-text mb-4">
                        Users can access a calendar feature to view their
                        upcoming appointments, schedule new appointments, and
                        receive reminders for upcoming appointments
                      </p>
                      <button className="btn btn-primary shadow" type="button">
                        Learn more
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col mb-4">
                  <div className="card shadow-sm">
                    <div className="card-body px-4 py-5 px-md-5">
                      <div
                        className="bs-icon-lg d-flex justify-content-center align-items-center mb-3 bs-icon"
                        style={{
                          top: "1rem",
                          right: "1rem",
                          position: "absolute",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          className="bi bi-vector-pen text-success"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828L10.646.646zm-1.8 2.908-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z"
                          />
                          <path
                            fillRule="evenodd"
                            d="M2.832 13.228 8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086.086-.026z"
                          />
                        </svg>
                      </div>
                      <h5 className="fw-bold card-title">Contribute</h5>
                      <p className="text-muted card-text mb-4">
                        DocSphare provides personalized medical treatment plans
                        and medication recommendations through its prescription
                        feature
                      </p>
                      <button className="btn btn-primary shadow" type="button">
                        Learn more
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md-8 col-xl-6 text-center mx-auto">
                <p className="fw-bold text-success mb-2">Contacts</p>
                <h2 className="fw-bold">How you can reach us</h2>
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-md-6 col-xl-4">
                <div>
                  <form className="p-3 p-xl-4" method="post">
                    <div className="mb-3">
                      <input
                        className="form-control"
                        type="text"
                        id="name-1"
                        name="name"
                        placeholder="Name"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        className="form-control"
                        type="email"
                        id="email-1"
                        name="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="mb-3">
                      <textarea
                        className="form-control"
                        id="message-1"
                        name="message"
                        rows={6}
                        placeholder="Message"
                        defaultValue={""}
                      />
                    </div>
                    <div>
                      <button
                        className="btn btn-primary shadow d-block w-100"
                        type="submit"
                      >
                        Send{" "}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-4 col-xl-4 d-flex justify-content-center justify-content-xl-start">
                <div className="d-flex flex-wrap flex-md-column justify-content-md-start align-items-md-start h-100">
                  <div className="d-flex align-items-center p-3">
                    <div className="bs-icon-md bs-icon-circle bs-icon-primary shadow d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon bs-icon-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className="bi bi-telephone"
                      >
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                      </svg>
                    </div>
                    <div className="px-2">
                      <h6 className="fw-bold mb-0">Phone</h6>
                      <p className="text-muted mb-0">+123456789</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center p-3">
                    <div className="bs-icon-md bs-icon-circle bs-icon-primary shadow d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon bs-icon-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className="bi bi-envelope"
                      >
                        <path
                          fillRule="evenodd"
                          d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"
                        />
                      </svg>
                    </div>
                    <div className="px-2">
                      <h6 className="fw-bold mb-0">Email</h6>
                      <p className="text-muted mb-0">info@example.com</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center p-3">
                    <div className="bs-icon-md bs-icon-circle bs-icon-primary shadow d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon bs-icon-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className="bi bi-pin"
                      >
                        <path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A5.921 5.921 0 0 1 5 6.708V2.277a2.77 2.77 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354zm1.58 1.408-.002-.001.002.001zm-.002-.001.002.001A.5.5 0 0 1 6 2v5a.5.5 0 0 1-.276.447h-.002l-.012.007-.054.03a4.922 4.922 0 0 0-.827.58c-.318.278-.585.596-.725.936h7.792c-.14-.34-.407-.658-.725-.936a4.915 4.915 0 0 0-.881-.61l-.012-.006h-.002A.5.5 0 0 1 10 7V2a.5.5 0 0 1 .295-.458 1.775 1.775 0 0 0 .351-.271c.08-.08.155-.17.214-.271H5.14c.06.1.133.191.214.271a1.78 1.78 0 0 0 .37.282z" />
                      </svg>
                    </div>
                    <div className="px-2">
                      <h6 className="fw-bold mb-0">Location</h6>
                      <p className="text-muted mb-0">12 Example Street</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5">
          <div className="container">
            <div className="bg-dark border rounded border-dark d-flex flex-column justify-content-between align-items-center flex-lg-row p-4 p-lg-5">
              <div className="text-center text-lg-start py-3 py-lg-1">
                <h2 className="fw-bold mb-2">Subscribe to our newsletter</h2>
                <p className="mb-0">
                  Connect with us and let us help you stay healthy
                </p>
              </div>
              <form
                className="d-flex justify-content-center flex-wrap flex-lg-nowrap"
                method="post"
              >
                <div className="my-2">
                  <input
                    className="border rounded-pill shadow-sm form-control"
                    type="email"
                    name="email"
                    placeholder="Your Email"
                  />
                </div>
                <div className="my-2">
                  <button className="btn btn-primary shadow ms-2" type="submit">
                    Subscribe{" "}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
        <footer className="bg-dark">
          <div className="container py-4 py-lg-5">
            <div className="row justify-content-center">
              <div className="col-sm-4 col-md-3 text-center text-lg-start d-flex flex-column">
                <h3 className="fs-6 fw-bold">Services</h3>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">DocMap</a>
                  </li>
                  <li>
                    <a href="#">Appointments</a>
                  </li>
                  <li>
                    <a href="#">Precscriptions</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-4 col-md-3 text-center text-lg-start d-flex flex-column">
                <h3 className="fs-6 fw-bold">About</h3>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Company</a>
                  </li>
                  <li>
                    <a href="#">Team</a>
                  </li>
                  <li>
                    <a href="#">Legacy</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-4 col-md-3 text-center text-lg-start d-flex flex-column">
                <h3 className="fs-6 fw-bold">Careers</h3>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Job openings</a>
                  </li>
                  <li>
                    <a href="#">Employee success</a>
                  </li>
                  <li>
                    <a href="#">Benefits</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 text-center text-lg-start d-flex flex-column align-items-center order-first align-items-lg-start order-lg-last">
                <div className="fw-bold d-flex align-items-center mb-2">
                  <span className="bs-icon-sm bs-icon-circle bs-icon-primary d-flex justify-content-center align-items-center bs-icon me-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="bi bi-bezier"
                    >
                      <path
                        fillRule="evenodd"
                        d="M0 10.5A1.5 1.5 0 0 1 1.5 9h1A1.5 1.5 0 0 1 4 10.5v1A1.5 1.5 0 0 1 2.5 13h-1A1.5 1.5 0 0 1 0 11.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm10.5.5A1.5 1.5 0 0 1 13.5 9h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM6 4.5A1.5 1.5 0 0 1 7.5 3h1A1.5 1.5 0 0 1 10 4.5v1A1.5 1.5 0 0 1 8.5 7h-1A1.5 1.5 0 0 1 6 5.5v-1zM7.5 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"
                      />
                      <path d="M6 4.5H1.866a1 1 0 1 0 0 1h2.668A6.517 6.517 0 0 0 1.814 9H2.5c.123 0 .244.015.358.043a5.517 5.517 0 0 1 3.185-3.185A1.503 1.503 0 0 1 6 5.5v-1zm3.957 1.358A1.5 1.5 0 0 0 10 5.5v-1h4.134a1 1 0 1 1 0 1h-2.668a6.517 6.517 0 0 1 2.72 3.5H13.5c-.123 0-.243.015-.358.043a5.517 5.517 0 0 0-3.185-3.185z" />
                    </svg>
                  </span>
                  <span>DocSphere</span>
                </div>
                <p className="text-muted">
                  Uniting Medical Minds for Better Health
                </p>
              </div>
            </div>
            <hr />
            <div className="text-muted d-flex justify-content-between align-items-center pt-3">
              <p className="mb-0">Copyright © 2023 DocSphere</p>
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="bi bi-facebook"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </li>
                <li className="list-inline-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="bi bi-twitter"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </li>
                <li className="list-inline-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="bi bi-instagram"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </>
    </div>
  );
};

export default home;
