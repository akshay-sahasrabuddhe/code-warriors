import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
//import { makeStyles, TextField, Button, Radio, RadioGroup } from '@material-ui/core';
//import { FormControlLabel, FormLabel } from "@material-ui/core";
import {Form, FloatingLabel, Button, Row, Col}from 'react-bootstrap'
import '../App.css';

/*const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing(2),
  
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '300px',
      },
      '& .MuiButtonBase-root': {
        margin: theme.spacing(2),
      },
      
    },
  }));
  */

const Signup = (props) => {
    //const classes = useStyles();
    return (
        <div className="App-body pt-5 mt-5">
            <Form className='signupForm'>
               <h2>Signup Form</h2>
               <Row className="mb-4">
               <Form.Group as={Col}>
               <FloatingLabel
                controlId="firstName"
                label="First Name"
                className="mb-3"
                >
                    <Form.Control type="text" placeholder="First Name"
                        className="textform"
                    />
                </FloatingLabel>
                </Form.Group>
                <Form.Group as={Col}>
                    <FloatingLabel
                        controlId="lastName"
                        label="Last Name"
                        className="mb-3"
                    >
                    <Form.Control type="text" placeholder="Last Name"
                        className="textform"
                    />
                    </FloatingLabel>
                </Form.Group>
                </Row>
  
                <Form.Group>
                    <FloatingLabel
                        controlId="email"
                        label="Email"
                        className="mb-3"
                    >
                    <Form.Control type="email" placeholder="name@example.com"
                        className="textform"
                    />
                </FloatingLabel>
  
  
                <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                    <Form.Control type="password" placeholder="Password" 
                        className="textform"
                    />
                </FloatingLabel>

                <FloatingLabel controlId="floatingCPassword" label="Confirm Password" className="mb-3">
                    <Form.Control type="password" placeholder="Confirm Password"
                        className="textform"
                    />
                </FloatingLabel>

                <FloatingLabel controlId="date" label="Date of Birth" className="mb-3">
                    <Form.Control type="date" placeholder="Date of Birth" 
                        className="textform"
                    />
                </FloatingLabel>

                <Form.Label className="select" >
                Gender
                <Form.Select aria-label="Gender" size='lg' className="textform">
                    <option></option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                    <option value="nodisclosure">Prefer not to disclose</option>
                </Form.Select>
                </Form.Label>

                <Form.Label  className="select">
                Relationship Status
                <Form.Select aria-label="relationship status" className="textform" size='lg'>
                <option></option>
                <option value="married">Married</option>
                <option value="single">Single</option>
                <option value="inarelation">In a Relationship</option>
                <option value="nodisclosure">Prefer not to disclose</option>
                </Form.Select>
                </Form.Label>


                <FloatingLabel controlId="floatingtextarea" label="Interests" className="mb-3">
                    <Form.Control as="textarea" rows={10} placeholder="Interests"
                    className="textarea"
                />
                </FloatingLabel>

                </Form.Group>
 
  
                <Button variant="primary" type="submit" className="submit">
    Submit
                </Button>
            </Form> 
        
        </div>
    );
};

export default Signup;