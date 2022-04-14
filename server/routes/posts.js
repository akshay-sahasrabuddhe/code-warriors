const express = require("express");
const router = express.Router();
const data = require("../data");
const errorhandle = data.errorhandlers;
const postData = data.posts;
const commentData = data.comments;
let { ObjectId } = require("mongodb");

router.get("/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let ID = errorhandle.checkAndGetID(id, "Post ID");
  } catch (e) {
    res.status(400).json({ error: e });
    return;
  }
  try {
    let id = req.params.id;
    let ID = errorhandle.checkAndGetID(id, "Post ID");
    let post = await postData.get(id);
    res.json(post);
    return;
  } catch (e) {
    res.status(404).json({ error: e });
    return;
  }
});

router.get("/", async (req, res) => {
  try {
    let postList = await postData.getAll();
    res.json(postList);
    return;
  } catch (e) {
    res.status(500).json({ error: e });
    return;
  }
});

router.post("/", async (req, res) => {
  let postInfo = req.body;
  try {
    errorhandle.checkProperString(postInfo.title, "Title");
    errorhandle.checkProperString(postInfo.body, "Body");
    errorhandle.checkProperObject(postInfo.userThatPosted);
    errorhandle.checkProperBoolean(postInfo.isPublic, "isPublic");

    errorhandle.checkProperString(
      postInfo.userThatPosted.firstName,
      "User Name"
    );

    let userID = errorhandle.checkAndGetID(postInfo.userThatPosted._id);
  } catch (e) {
    res.status(400).json({ error: e });
    return;
  }

  try {
    const newPost = await postData.create(
      postInfo.title,
      postInfo.body,
      postInfo.userThatPosted,
      postInfo.isPublic
    );
    res.json(newPost);
    return;
  } catch (e) {
    res.status(500).json({ error: e });
    return;
  }
});

router.put("/:id", async (req, res) => {
  const updatedData = req.body;
  try {
    let id = req.params.id;
    let ID = errorhandle.checkAndGetID(id, "Post ID");
    errorhandle.checkProperString(updatedData.title, "Title");
    errorhandle.checkProperString(updatedData.body, "Body");
    errorhandle.checkProperBoolean(updatedData.isPublic, "isPublic");
  } catch (e) {
    res.status(400).json({ error: e });
    return;
  }

  try {
    await postData.get(req.params.id);
  } catch (e) {
    res.status(404).json({ error: e });
    return;
  }

  try {
    const updatedPost = await postData.update(
      req.params.id,
      updatedData.title,
      updatedData.body,
      updatedData.isPublic
    );
    res.json(updatedPost);
    return;
  } catch (e) {
    res.status(500).json({ error: e });
    return;
  }
});
router.patch("/:id", async (req, res) => {
  const updatedData = req.body;
  try {
    let id = req.params.id;
    let ID = errorhandle.checkAndGetID(id, "Post ID");
  } catch (e) {
    res.status(400).json({ error: e });
    return;
  }
  let oldData;

  try {
    oldData = await postData.get(req.params.id);
  } catch (e) {
    res.status(404).json({ error: e });
    return;
  }

  if (updatedData.title) {
    try {
      errorhandle.checkProperString(updatedData.title, "Title");
    } catch (e) {
      res.status(400).json({ error: e });
      return;
    }
  } else {
    updatedData.title = oldData.title;
  }

  if (updatedData.body) {
    try {
      errorhandle.checkProperString(updatedData.body, "Body");
    } catch (e) {
      res.status(400).json({ error: e });
      return;
    }
  } else {
    updatedData.body = oldData.body;
  }

  if (updatedData.isPublic) {
    try {
      errorhandle.checkProperBoolean(updatedData.isPublic, "isPublic");
    } catch (e) {
      res.status(400).json({ error: e });
      return;
    }
  } else {
    updatedData.isPublic = oldData.isPublic;
  }

  try {
    const updatedPost = await postData.update(
      req.params.id,
      updatedData.title,
      updatedData.body,
      updatedData.isPublic
    );
    res.json(updatedPost);
    return;
  } catch (e) {
    res.status(500).json({ error: e });
    return;
  }
});
router.delete("/:id", async (req, res) => {
  try {
    await postData.get(req.params.id);
  } catch (e) {
    res.status(404).json({ error: e });
    return;
  }

  try {
    let post = await postData.remove(req.params.id);
    res.json(post);
    return;
  } catch (e) {
    res.json({ error: e });
    res.status(500);
    return;
  }
});

router.post("/like/:id", async (req, res) => {
  const updatedData = req.body;
  try {
    let id = req.params.id;
    let ID = errorhandle.checkAndGetID(id, "Post ID");
    let userID = errorhandle.checkAndGetID(updatedData.userID, "User ID");
  } catch (e) {
    res.status(400).json({ error: e });
    return;
  }

  try {
    const updatedPost = await postData.addLikes(
      req.params.id,
      updatedData.userID
    );
    res.json(updatedPost);
    return;
  } catch (e) {
    res.status(500).json({ error: e });
    return;
  }
});

module.exports = router;
