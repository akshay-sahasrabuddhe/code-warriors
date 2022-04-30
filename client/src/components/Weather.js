import React,{useEffect, useState} from "react";
import {Card} from "react-bootstrap";
import axios from "axios";
import Navigation from "./Navigation";
import { geolocated } from "react-geolocation";

import '../App.css';

const API_KEY = '4581b147b62a4819b9d165739222003';

const Weather = (props) => {

    const [weather, setWeather] = useState(undefined);
    const [latitude, setLat] = useState(null);
    const [longitude, setLong] = useState(null);
    const [loading, setLoading] = useState(true);
    const [state, setState] = useState(null);
    const [region, setRegion] = useState(null);
    let result = null;
   
/*
    useEffect(() => {
        async function fetchData(){ 
            console.log("useEffect called");
            try{

                if(navigator.geolocation){
                    setStatus("Geolocation is not supported");
                }
                else{
                    setStatus('locating...');
                    navigator.geolocation.getCurrentPosition((position) => {
                        setStatus(null);
                        setLatitude(position.coords.latitude);
                        setLongitude(position.coords.longitude);
                    })
                }


            console.log("here");    
            console.log("Here"+latitude);
            if(longitude && latitude){
            let location = latitude+','+longitude;   
            

            setWeather(data.current);
            console.log(weather);
            //setLoading(false);
            }
            }
            catch(e){
                console.log(e);
            }
        }
        fetchData();
    },[status]);
    
    console.log(weather);

   if(weather){
       result = weather.condition;
   }
   else{
       setStatus('locating...')
   }


   if(status){
       return(
        <div>
            <h1>{status}</h1>
        </div>
       );
   }
   else{
    return(
        <div>
            <h1>Hello</h1>

            <div>
            {result.text}

            <img src={result.icon}/>
                
            </div>
        </div>
    );
   }*/
  
    useEffect(() => {
        async function fetchData() {
            try{
            navigator.geolocation.getCurrentPosition(function(position) {
              setLat(position.coords.latitude);
              setLong(position.coords.longitude);
            });
            console.log(latitude);
            if(latitude && longitude){
                let location = latitude+','+longitude;
            const url = 'http://api.weatherapi.com/v1/current.json?key='+API_KEY+
            '&q='+location;
                console.log(url);
            const { data } = await axios.get(url);
            const url2 = 'http://api.weatherapi.com/v1/forecast.json?key='+API_KEY+'&q='+location+'&days=1&aqi=no&alerts=no';
            const  loc  = await axios.get(url2);
            console.log(loc);
            setRegion(loc);
            setWeather(data.current);
            }
        
            
        }
        catch(e){
            console.log(e);
        }
      }
    fetchData();
    }, [latitude, longitude]);
    

    console.log(weather);
    console.log(region);

   if(weather){
      let day; 
   result = weather;
        if(result.is_day){
            day = true;
        }
        else{
            day = false;
        }

        return(
            <div>
                <Navigation></Navigation>
            <div className="cards">
                <Card id={day?"day":"night"} className="card">
                <Card.Header>
                <img className="wicon" src={result.condition.icon}/>{result.condition.text}
                 <h2>{region.data.location.region}</h2>
                </Card.Header>
                <Card.Body className="card-body">
                
                <Card.Text>
                
                Temperature - {result.temp_f}F<br/>
                <sub>Feels Like {result.feelslike_f}F</sub>
                <br/>
                Wind Direction - {result.wind_dir}
                
                </Card.Text>    
                </Card.Body>
               
               
                </Card>
            </div>
            </div>
        );
   }
   else{
      // setStatus(null);
       return(
        <div>
            <span>Could not get the location</span>
        </div>
       );
   }
   return(
       <div>
           <h1>Hello</h1>
       </div>
   )
};

export default (Weather);