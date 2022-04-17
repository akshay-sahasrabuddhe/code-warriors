import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
//import { makeStyles, TextField, Button, Radio, RadioGroup } from '@material-ui/core';
//import { FormControlLabel, FormLabel } from "@material-ui/core";
import {Form, FloatingLabel, Button, Row, Col}from 'react-bootstrap'
import '../App.css';
import Signup from "./Signup";
import Login from "./Login";

const Main = (props) =>{
    return(
        <div>
            <Login></Login>
            <Signup></Signup>
        </div>
    );
}

export default Main;