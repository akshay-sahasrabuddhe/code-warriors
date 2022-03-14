import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { makeStyles, TextField, Button, Radio, RadioGroup } from '@material-ui/core';
import { FormControlLabel, FormLabel } from "@material-ui/core";
import '../App.css';

const useStyles = makeStyles(theme => ({
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
  

const Signup = (props) => {
    const classes = useStyles();
    return (
        <div>
            <form className={classes.root}>
                <TextField 
                    label='First Name'
                    variant='filled'
                />

                <TextField 
                    label='Last Name'
                    variant='filled'
                />

                <TextField 
                    label='email'
                    variant='filled'
                /> 

                <TextField 
                    label='password'
                    variant='filled'
                    type='password'
                />

                <TextField 
                    label='confirm password'
                    variant='filled'
                    type='password'
                />
                   
                <TextField 
                    
                    variant='filled'
                    type='date'
                />
                <FormLabel id='demo-radio-buttons-group-label'>Gender</FormLabel>
                <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue=""
                
                name="radio-buttons-group">
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>




            </form>
        </div>
    );
};

export default Signup;