import React,{useEffect, useState} from "react";
import {Card} from "react-bootstrap";
import axios from "axios";
import '../App.css';
//Api Key - e0ef8de9236a4c608dcdadbc7f2c3b2c
const API_KEY = 'e0ef8de9236a4c608dcdadbc7f2c3b2c';
const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey='+API_KEY;
const News = (props) => {
    let newsList = null;
    console.log(url);
    const [news , setNews] = useState(undefined);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchData(){
            const { data } = await axios.get(url);
            setNews(data);
            setLoading(false);
            console.log(data);
        }
        fetchData();
    },[]);

    newsList = news && news.articles.map((n) => {
        return <Card key={n.title} className="card" >
            <Card.Body className="card-body">
            <a className="card-link" href={n.url} target="_blank">
                <Card.Img className="card-img" variant="top" 
                src={n.urlToImage}/>
                <Card.Title className="card-title">{n.title}</Card.Title></a>
                <Card.Text className="p">
                    {n.content}
                </Card.Text>
            </Card.Body>
        </Card>
        
    })

    if(loading){
        return(
        <div>
            <h1>Loading...</h1>
        </div>
        );
    }
    else{
    return(
        <div>
            <h1>News</h1>
        <div className="cards">
            
            {newsList}
        </div>
        </div>
    );
    }

}

export default News;