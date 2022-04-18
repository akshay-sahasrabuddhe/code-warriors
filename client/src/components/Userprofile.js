import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import Navigation from "./Navigation";
import '../App.css';
import logoImg from '../images/logo.gif';
import $, { event } from 'jquery';
import { Modal } from 'bootstrap';

const Userprofile = (props) => {

    return (
        // ---------- Start of Posts ---------- // 
        <> 
        <Navigation></Navigation>  
        <section className="section posts-section">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                       
                    </div>
                </div>
            </div>
        </section>

        </>
        
    );
};

export default Userprofile;