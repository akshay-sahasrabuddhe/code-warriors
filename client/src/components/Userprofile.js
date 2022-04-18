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
        // ---------- Start of Posts ---------- // 
        <> 
        <Navigation></Navigation>  
        <section className="posts-section">
            <div className="user-profile-box">
                <img src={maleUser} class="user-profile-pic" alt="User Profile Pic" />
            </div>
        </section>

        </>
        
    );
};

export default Userprofile;