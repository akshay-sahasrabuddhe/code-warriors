import React from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import Signup from "./components/Signup";
import Login from "./components/Login";
import News from "./components/News";
import Weather from "./components/Weather";
import Posts from "./components/Posts";
import Memories from "./components/Memories";
import Userprofile from "./components/Userprofile";
import Main from "./components/Main";
import Search from "./components/Search";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Videos from "./components/Videos";
import ViewRequests from "./components/ViewRequests";
import Messenger from "./components/messenger/Messenger";
import Error from "./components/Error"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to DuckBook</h1>

        {/* <Link className='App-link' to='signup'>Signup</Link>
          <Link className='App-link' to='login'>Login</Link> */}
      </header>

      <div className="App-body">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-9 offset-lg-3">
              <div className="row">
                <div className="col-sm-9">
                  <Routes>
                    <Route index path="/" element={<Main />} />
                    <Route exact path="/posts" element={<Posts />} />
                    <Route exact path="/news" element={<News />} />
                    <Route exact path="/weather" element={<Weather />} />
                    <Route exact path="/videos" element={<Videos />} />
                    <Route exact path="/memories" element={<Memories />} />
                    <Route exact path="/userprofile/:id" element={<Userprofile />} />
                    <Route exact path="/viewrequests" element={<ViewRequests />} />
                    <Route exact path="/messenger" element={<Messenger />} />
                    <Route exact path="/search" element={<Search />} />
                    <Route path="*" element={<Error />}/>
                  </Routes>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
