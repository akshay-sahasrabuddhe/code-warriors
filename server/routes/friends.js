const express = require("express");
const router = express.Router();
const data = require("../data");
const friendData = data.friends;

router.post("/sendRequest", async (req, res) => {
  console.log("hfggh");
  let sender = req.body.sender;
  let receiver = req.body.receiver;
  console.log(sender);
  try {
    if (!sender) {
      throw "Id missing";
    }
    if (!receiver) {
      throw "Id missing";
    }
  } catch (e) {
    res.status(400).json({ error: e });
    return;
  }
  sender = sender.trim();
  receiver = receiver.trim();
  console.log(receiver);
  try {
    const sendReq = await friendData.sendReq(sender, receiver);
    console.log(sendReq);
    if (sendReq.request) {
      res.status(200).json({ requestSent: 200 });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e });
    return;
  }
});

router.post("/searchrequest", async (req, res) => {
  console.log("hfggh");
  let logUser = req.body.loggedIn;
  let visUser = req.body.Visited;

  try {
    if (!logUser) {
      throw "Id missing";
    }
    if (!visUser) {
      throw "Id missing";
    }
  } catch (e) {
    res.status(400).json({ error: e });
    return;
  }
  logUser = logUser.trim();
  visUser = visUser.trim();

  try {
    const sendReq = await friendData.searchReq(logUser, visUser);

    if (sendReq.request) {
      res.status(200).json({ requestSent: 200, data: sendReq.result });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e });
    return;
  }
});

router.post("/cancelrequest", async (req, res) => {
  let sender = req.body.sender;
  let receiver = req.body.receiver;

  try {
    if (!sender) {
      throw "Id missing";
    }
    if (!receiver) {
      throw "Id missing";
    }
  } catch (e) {
    res.status(400).json({ error: "error" });
    return;
  }
  sender = sender.trim();
  receiver = receiver.trim();
  console.log(receiver);
  try {
    const canReq = await friendData.canReq(sender, receiver);

    if (canReq.status) {
      res.status(200).json({ status: true });
    } else {
      res.status(400).json({ status: false });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e });
    return;
  }
});

router.get("/findFriend/:Id", async (req, res) => {
  try {
    let userId = req.params.Id;
    console.log(userId);
    let datas = await friendData.getfriendReqById(userId);
    console.log(datas);
    if (datas.status) {
      res.status(200).json({ status: true, data: datas.d });
    } else {
      res.status(200).json({ status: false });
    }
  } catch (error) {
    if (error == 400) {
      res.status(400).json({ status: false, error: error });
    }
    res.status(500).json({ status: false });
  }
});
module.exports = router;
