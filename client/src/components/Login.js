import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
//import { makeStyles, TextField, Button, Radio, RadioGroup } from '@material-ui/core';
//import { FormControlLabel, FormLabel } from "@material-ui/core";
import {Form, FloatingLabel, Button, Row, Col}from 'react-bootstrap'
import '../App.css';

const Login = (props) => {
    return(
        <div className="App-body pt-5 mt-5">
            <h2>Login Form</h2>
            <Form className='signupForm'>
                <Form.Group>
                <FloatingLabel
    controlId="floatingInput"
    label="Email address"
    className="mb-3"
  >
    <Form.Control type="email" className="textform" placeholder="name@example.com" />
  </FloatingLabel>
  <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
    <Form.Control type="password" className="textform" placeholder="Password" />
  </FloatingLabel>
                </Form.Group>
                <Button variant="primary" type="submit" className="submit">
    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Login;