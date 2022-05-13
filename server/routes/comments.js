const express = require("express");
const router = express.Router();
const data = require("../data");
const errorhandle = data.errorhandlers;
const commentData = data.comments;
let { ObjectId } = require("mongodb");

router.get("/comment/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let ID = errorhandle.checkAndGetID(id, "Comment ID");
  } catch (e) {
    res.status(400).json({ error: e });
    return;
  }
  try {
    let id = req.params.id;
    let ID = errorhandle.checkAndGetID(id, "Comment ID");
    let comment = await commentData.get(id);
    res.json(comment);
    return;
  } catch (e) {
    res.status(404).json({ error: e });
    return;
  }
});

router.get("/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let ID = errorhandle.checkAndGetID(id, "Comment ID");
  } catch (e) {
    res.status(400).json({ error: e });
    return;
  }
  try {
    let commentList = await commentData.getAll(req.params.id);
    res.json(commentList);
    return;
  } catch (e) {
    res.status(500).json({ error: e });
    return;
  }
});

router.post("/:id", async (req, res) => {
  let commentInfo = req.body;
  console.log(req.body);
  try {
    let postID = errorhandle.checkAndGetID(req.params.id, "postId");
    errorhandle.checkProperString(commentInfo.comment, "Comment Body");
    errorhandle.checkProperObject(commentInfo.userThatPostedComment);
    errorhandle.checkProperString(
      commentInfo.userThatPostedComment.firstName,
      "User Name"
    );
    let userID = errorhandle.checkAndGetID(
      commentInfo.userThatPostedComment._id
    );
  } catch (e) {
    res.status(400).json({ error: e });
    return;
  }

  try {
    const newComment = await commentData.create(
      req.params.id,
      commentInfo.userThatPostedComment,
      commentInfo.comment
    );
    res.json(newComment);
    return;
  } catch (e) {
    res.status(500).json({ error: e });
    return;
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await commentData.get(req.params.id);
  } catch (e) {
    res.status(404).json({ error: e });
    return;
  }

  try {
    let comment = await commentData.remove(req.params.id);
    res.json(comment);
    return;
  } catch (e) {
    res.json({ error: e });
    res.status(500);
    return;
  }
});

module.exports = router;
