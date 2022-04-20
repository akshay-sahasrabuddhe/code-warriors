import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import Navigation from "./Navigation";
import '../App.css';
import logoImg from '../images/logo.gif';
import maleUser from '../images/male-user.svg';
import femaleUser from '../images/female-user.svg';
import otherUser from '../images/other.svg';
import $, { event } from 'jquery';
import { Modal } from 'bootstrap';

const Userprofile = (props) => {

    return (
        <> 
        <Navigation></Navigation>  
        {/* // ---------- Start of User Profile Section ---------- //  */}
        <section className="user-profile-section">
            <div className="user-profile-box">
                <img src={maleUser} className="user-profile-pic" alt="User Profile Pic" />
            </div>
        </section>
        {/* // ---------- End of User Profile Section ---------- //  */}

        {/* // ---------- Start of User profiel Tabs Section ---------- //  */}

        <section className="user-profiel-tabs-section">
            <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link w-100 active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">About</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link w-100" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Friends</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link w-100" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Edit Profile</button>
                </li>
            </ul>
            <div className="tab-content border border-top-0" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <div className="row">
                        <div className="col-md-5 offset-2 offset-md-1">
                            <div className="d-flex  pt-4 pb-4">
                                <div className="d-flex align-self-center">
                                    <span className="material-icons-outlined about-box-img">email</span>
                                </div>
                                <div className="d-flex flex-column m-2">
                                    <span className="about-heading">asahasra@stevens.edu</span>
                                    <span className="about-subheading text-secondary">Email</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 offset-2 offset-md-1">
                            <div className="d-flex  pt-4 pb-4">
                                <div className="d-flex align-self-center">
                                    <span className="material-icons-outlined about-box-img">cake</span>
                                </div>
                                <div className="d-flex flex-column m-2">
                                    <span className="about-heading">1 November 1996</span>
                                    <span className="about-subheading text-secondary">Birthday</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 offset-2 offset-md-1">
                            <div className="d-flex  pt-4 pb-4">
                                <div className="d-flex align-self-center">
                                    <span className="material-icons-outlined about-box-img">boy</span>
                                    {/* <span className="material-icons-outlined about-box-img">girl</span> */}
                                    {/* <span className="material-icons-outlined about-box-img">transgender</span> */}
                                </div>
                                <div className="d-flex flex-column m-2">
                                    <span className="about-heading">Man</span>
                                    <span className="about-subheading text-secondary">Gender</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 offset-2 offset-md-1">
                            <div className="d-flex  pt-4 pb-4">
                                <div className="d-flex align-self-center">
                                    <span className="material-icons-outlined about-box-img">favorite</span>
                                </div>
                                <div className="d-flex flex-column m-2">
                                    <span className="about-heading">Single</span>
                                    <span className="about-subheading text-secondary">Relationship Status</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-10 offset-2 offset-md-1">
                            <div className="pt-4 pb-4 d-flex align-self-center">
                                <div className="d-flex align-self-center">
                                    <span className="material-icons-outlined about-box-img">interests</span>
                                </div>
                                <div className="d-flex flex-column m-2">
                                    <span className="about-heading">Cricket, Football, Singing</span>
                                    <span className="about-subheading text-secondary">Interests</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade pt-4 friends-tab" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="card text-center">
                                    <img src={maleUser} className="" alt="User Profile Pic" />
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Akshay</h5>
                                        <a href="#" className="btn btn-primary">Add Friend</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card text-center">
                                    <img src={maleUser} className="" alt="User Profile Pic" />
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Roshan</h5>
                                        <a href="#" className="btn btn-primary">Add Friend</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card text-center">
                                    <img src={maleUser} className="" alt="User Profile Pic" />
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Juzar</h5>
                                        <a href="#" className="btn btn-primary">Add Friend</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card text-center">
                                    <img src={maleUser} className="" alt="User Profile Pic" />
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Tapish</h5>
                                        <a href="#" className="btn btn-primary">Add Friend</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card text-center">
                                    <img src={maleUser} className="" alt="User Profile Pic" />
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Akhilesh</h5>
                                        <a href="#" className="btn btn-primary">Add Friend</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
            </div>
        </section>

        {/* // ---------- End of User profiel Tabs Section ---------- //  */}
        </>
        
    );
};

export default Userprofile;