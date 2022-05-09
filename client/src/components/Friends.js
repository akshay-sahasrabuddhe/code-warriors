import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import "../App.css";
import logoImg from "../images/logo.gif";
import maleUser from "../images/male-user.svg";
import femaleUser from "../images/female-user.svg";
import otherUser from "../images/other.svg";
import $, { event } from "jquery";
import { Modal } from "bootstrap";
import axios from "axios";
import { Form, FloatingLabel, Button, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import cryptojs from "crypto-js";
import About from "./About";
import EditProfile from "./EditProfile";

const Friends = (props) => {

    return(
        <div className="tab-pane fade pt-4 friends-tab" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="card text-center">
                                    <img src={maleUser} className="friend-list-card-img" alt="User Profile Pic" />
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Akshay</h5>
                                        <a href="#" className="btn btn-primary">Remove</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card text-center">
                                    <img src={maleUser} className="friend-list-card-img" alt="User Profile Pic" />
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Roshan</h5>
                                        <a href="#" className="btn btn-primary">Remove</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card text-center">
                                    <img src={maleUser} className="friend-list-card-img" alt="User Profile Pic" />
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Juzar</h5>
                                        <a href="#" className="btn btn-primary">Remove</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card text-center">
                                    <img src={maleUser} className="friend-list-card-img" alt="User Profile Pic" />
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Tapish</h5>
                                        <a href="#" className="btn btn-primary">Remove</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card text-center">
                                    <img src={maleUser} className="friend-list-card-img" alt="User Profile Pic" />
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Akhil</h5>
                                        <a href="#" className="btn btn-primary">Remove</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    );
}

export default Friends;