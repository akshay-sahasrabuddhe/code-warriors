import React,{useEffect, useState} from "react";
import {Card} from "react-bootstrap";
import axios from "axios";
import Navigation from "./Navigation";
import '../App.css';

//const API_KEY = '8ba9f2869104be5276db0f1bf239ff58cb7ab9a271de9350b4e3e7ac2feb3d03';
const url = 'http://localhost:3000/videos';

const Videos = (props) => {
 
    let videoList = null;
    const [videos, setVideos] = useState(undefined);
    const [loading, setLoading] = useState(undefined);

    useEffect(() => {
        async function fetchData(){
            try{
                console.log("here");
               // axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
               console.log(url);
                const { data } = await axios.get(url);
                //const  data  = await fetch(url,{mode:'cors'});
                if(data){
                    setLoading(false);
                    setVideos(data.video_results);
                }
                console.log(data)
            }
            catch(e){
                console.log(e);
            }
        }
        fetchData();
    },[]);

    videoList = videos && videos.map((v) => {
        let vidLink = v.link.split('=');
        let link = 'https://www.youtube.com/embed/'+vidLink[vidLink.length-1];
        return <Card key={v.position_on_page} className="card news-card vid-card" >
         
        <Card.Body className="card-body"> 
        <iframe width="420" height="315"
        src={link} frameBorder="0" allowFullScreen>
        </iframe>
        </Card.Body>
        </Card>
    });

    return(
        <div>
            <Navigation></Navigation>
            <h1>Videos</h1>

          
                {videoList}
         
        </div>
    );
}

export default Videos;