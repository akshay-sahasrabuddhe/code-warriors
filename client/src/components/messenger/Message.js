import React from "react";
import img from "./logo512.png";
import "./message.css";
import { format } from "timeago.js";

export default function Message({ own, message }) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img className="messageImg" src={img} alt="profile picture"></img>
        <p className="messageText">{message.message}</p>
      </div>
      <div className="messageBottom">{format(message.createdAt)}</div>
    </div>
  );
}
