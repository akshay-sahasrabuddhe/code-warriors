const express = require("express");
const router = express.Router();
const data = require("../data");
let { ObjectId } = require("mongodb");
const { message } = require("../data");

//add message

router.post("/addmessage", async (req, res) => {
  try {
    let senderId = req.body.sender;
    let message = req.body.message;
    if(!senderId){
      throw "please provide data";
    }
    if(senderId.trim().length === 0){
      throw "please provide data";
    }
    if(!message){
      throw "please provide data";
    }
    if(message.trim().length === 0){
      throw "please provide data";
    }
    if(!req.conversationId){
      throw "please provide data";
    }
    if(req.conversationId.trim().length === 0){
      throw "please provide data";
    }
  } catch (error) {
    res.status(400).json({ error: "data not found" });
  }
  try {
    console.log(req.body.conversationId);
    console.log(req.body.sender);
    console.log(req.body.message);
    let newmsg = await message.addmessage(
      req.body.conversationId,
      req.body.sender,
      req.body.message
    );
    console.log(newmsg);
    res.status(200).json(newmsg);
  } catch (error) {
    console.log(error);
  }
});

//get message
router.get("/getmessage/:convoId", async (req, res) => {
  try {
    let convoID = req.params.convoId;

    if (convoID.trim().length === 0) {
      throw "Id not found";
    }
    let allmsg = await message.getmessage(convoID);
    res.status(200).json(allmsg);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});
module.exports = router;
