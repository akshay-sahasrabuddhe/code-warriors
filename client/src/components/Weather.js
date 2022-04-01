import React,{useEffect, useState} from "react";
import {Card} from "react-bootstrap";
import axios from "axios";
import Navigation from "./Navigation";

import '../App.css';

const API_KEY = '4581b147b62a4819b9d165739222003';



 
const Weather = (props) => {

    const [weather, setWeather] = useState(undefined);
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [loading, setLoading] = useState(true);
    let result = null;
   
const success = (position) => {
    console.log(position);
     setLatitude(position.coords.latitude);
     setLongitude(position.coords.longitude);
    console.log(latitude);
    // Do something with your latitude and longitude
  }
  

    useEffect(() => {
        async function fetchData(){ 
            try{
            console.log("Here"+latitude);
            navigator.geolocation.getCurrentPosition(success);
            let location = latitude+','+longitude;   
            const url = 'http://api.weatherapi.com/v1/current.json?key='+API_KEY+
            '&q='+location;

            const { data } = await axios.get(url);

            setWeather(data.current);
            console.log(weather);
            setLoading(false);
            }
            catch(e){
                console.log(e);
            }
        }
        fetchData();
    },[]);
    
   // result = weather.condition;


    if(loading){
        return(
            <div>
                <h1>Loading...</h1>
            </div>
            );
    }
    return(
        <div>
            <h1>Hello</h1>

            <div>
           
                
            </div>
        </div>
    );
};

export default Weather;