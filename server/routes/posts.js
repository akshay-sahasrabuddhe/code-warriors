const express = require("express");
const router = express.Router();
const data = require("../data");
const errorhandle = data.errorhandlers;
const postData = data.posts;
const commentData = data.comments;
let { ObjectId } = require("mongodb");
//For S3 bucket
const fs = require("fs");
const util = require("util");
const unlinkFile = util.promisify(fs.unlink);
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const { uploadFile, getFileStream } = require("../helpers/s3");

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

router.post("/", upload.single("image"), async (req, res) => {
  console.log(req.body.formdata);
  let postInfo = JSON.parse(req.body.formdata);
  // let postInfo = req.body.formdata;
  console.log(postInfo);
  // postInfo.userThatPosted = JSON.parse(postInfo.userThatPosted);
  postInfo.isPublic = postInfo.isPublic.toLowerCase() === "true";
  console.log(postInfo);
  console.log(req.file);
  let imagePath = `null`;
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
    if (errorhandle.checkImage(req.file)) {
      errorhandle.checkProperImage(req.file);
      const file = req.file;
      console.log(file);
      const result = await uploadFile(file);
      await unlinkFile(file.path);
      console.log(result);
      imagePath = `/posts/images/${result.Key}`;
      // res.send({ imagePath: `/images/${result.Key}` });
      // store {imagePath: `/images/${result.Key}`} in posts data
    }
  } catch (e) {
    res.status(400).json({ error: e });
    return;
  }
  console.log(imagePath);

  try {
    const newPost = await postData.create(
      postInfo.title,
      postInfo.body,
      postInfo.userThatPosted,
      postInfo.isPublic,
      imagePath
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

router.get("/images/:key", (req, res) => {
  console.log(req.params);
  const key = req.params.key;
  const readStream = getFileStream(key);

  readStream.pipe(res);
});

module.exports = router;
