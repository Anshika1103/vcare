import React from "react";
import { Link } from "react-router-dom";

export default function Services () {
    return (
        <>
            <section className="py-5">
        <div className="container py-5">
            <div className="row mb-4 mb-lg-5">
                <div className="col-md-8 col-xl-6 text-center mx-auto">
                    <p className="fw-bold text-success mb-2">Our Services</p>
                    <h3 className="fw-bold">What we provide for you</h3>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 mx-auto" style={{maxWidth: "900px"}}>
                <div className="col mb-5"><img alt="product"className="rounded img-fluid shadow" src="assets/img/products/1.jpg"/></div>
                <div className="col d-md-flex align-items-md-end align-items-lg-center mb-5">
                    <div>
                        <h5 className="fw-bold">Disease Mapping</h5>
                        <p className="text-muted mb-4">The Disease mapping provides an interactive platform for users to explore the prevalence and distribution of various diseases around the world. </p><Link to="/login" className="btn btn-primary shadow" >Learn more</Link>
                    </div>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 mx-auto" style={{maxWidth: "900px"}}>
                <div className="col order-md-last mb-5"><img alt="product"className="rounded img-fluid shadow" src="assets/img/products/2.jpg"/></div>
                <div className="col d-md-flex align-items-md-end align-items-lg-center mb-5">
                    <div>
                        <h5 className="fw-bold">Contribute</h5>
                        <p className="text-muted mb-4">We welcome submissions from healthcare professionals, researchers, patients, and anyone with a passion for advancing healthcare knowledge.</p><a href="/login" className="btn btn-primary shadow" type="button">Login to contribute </a>
                    </div>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 mx-auto" style={{maxWidth: "900px"}}>
                <div className="col mb-5"><img alt="product"className="rounded img-fluid shadow" src="assets/img/products/3.jpg"/></div>
                <div className="col d-md-flex align-items-md-end align-items-lg-center mb-5">
                    <div>
                        <h5 className="fw-bold">News&nbsp;</h5>
                        <p className="text-muted mb-4">We provides the latest updates and insights on healthcare topics from around the world. Our goal is to keep our readers informed and up-to-date on the most pressing issues in healthcare.</p><Link to="/login" className="btn btn-primary shadow">Learn more</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}