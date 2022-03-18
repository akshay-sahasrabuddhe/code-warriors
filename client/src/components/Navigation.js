import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import '../App.css';

const Navigation = (props) => {
    return (
        // ---------- Start of Navigation ---------- // 
       <section className="section nav-section">
            <nav className="navbar navbar-expand-lg horizontal-navigation navbar-expand-lg navbar-light">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

                <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    {/* <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><hr className="dropdown-divider"></hr></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </li> */}
                </ul>
                
                </div>
            </nav>
            <nav className="nav flex-column vertical-navigation">
                <a className="nav-link" href="/"><aside className="material-icons nav-icons">account_circle</aside><span>Akshay</span></a>
                <a className="nav-link" href="/"><aside className="material-icons nav-icons">people_alt</aside><span>Friends</span></a>

                <a className="nav-link" href="/"><aside className="material-icons nav-icons">ondemand_video</aside><span>Videos</span></a>
                <a className="nav-link" href="/"><aside className="material-icons nav-icons">history</aside><span>Memories</span></a>
                <a className="nav-link" href="/"><aside className="material-icons nav-icons">newspaper</aside><span>News</span></a>
                <a className="nav-link" href="/"><aside className="material-icons nav-icons">wb_sunny</aside><span>Weather</span></a>

                <a className="nav-link" href="/login">Login</a>
                <a className="nav-link" href="/Signup">Signup</a>
            </nav>
       </section>
        // ---------- End of Navigation ---------- // 
    );
};

export default Navigation;