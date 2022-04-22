import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
//import { makeStyles, TextField, Button, Radio, RadioGroup } from '@material-ui/core';
//import { FormControlLabel, FormLabel } from "@material-ui/core";
import {Form, FloatingLabel, Button, Row, Col}from 'react-bootstrap'
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
        <div>
            <Login></Login>
            <Button className='button' onClick={handleOpenModal}>Signup</Button>

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