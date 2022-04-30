import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
//import { makeStyles, TextField, Button, Radio, RadioGroup } from '@material-ui/core';
//import { FormControlLabel, FormLabel } from "@material-ui/core";
import {Form, FloatingLabel, Button, Row, Col}from 'react-bootstrap';
import logoImg from '../images/logo.gif';
import '../App.css';
import Signup from "./Signup";
import Login from "./Login";

const Main = (props) =>{

    const [showModal , setShowModal] = useState(false);

       
    const handleOpenModal = () => {
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

    return(
        <div className="FormContent">
            <img className="responsive-img frontImg logo-img" src={logoImg} alt="img" />
            <Login></Login>
            
            <Button  className='button signup-btn' onClick={handleOpenModal}>Signup</Button>

            {showModal && showModal && (
          <Signup
            isOpen={showModal}
            handleClose={handleCloseModal}
            modal='signup'
          />
        )}
        </div>
    );
}

export default Main;