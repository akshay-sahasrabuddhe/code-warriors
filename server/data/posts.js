const mongoCollections = require("../config/mongoCollections");
const posts = mongoCollections.posts;
const comments = mongoCollections.comments;
const errorhandle = require("./errorhandlers.js");
let { ObjectId } = require("mongodb");
const moment = require("moment");

module.exports = {
  async create(title, body, userThatPosted, isPublic) {
    errorhandle.checkProperString(title, "Title");
    errorhandle.checkProperString(body, "Body");
    errorhandle.checkProperObject(userThatPosted);
    errorhandle.checkProperString(userThatPosted.firstName, "User Name");
    errorhandle.checkProperBoolean(isPublic, "isPublic");

    let userID = errorhandle.checkAndGetID(userThatPosted._id);

    userThatPosted._id = userID;

    const postCollection = await posts();
    let newPost = {
      title: title,
      body: body,
      dateOfPost: moment().format("DD/MM/YYYY HH:mm:ss"),
      isPublic: isPublic,
      userThatPosted: userThatPosted,
      comments: [],
      likes: [],
    };

    const insertInfo = await postCollection.insertOne(newPost);
    if (insertInfo.insertedCount === 0) throw "Could not create a Post";

    const newId = insertInfo.insertedId.toString();
    const post = await this.get(newId);
    return post;
  },

  async get(id) {
    let ID = errorhandle.checkAndGetID(id, "Post ID");

    const postCollection = await posts();

    const post = await postCollection.findOne({ _id: ID });
    if (post === null) {
      throw "Error: No post with that id";
    }
    post._id = post._id.toString();
    return post;
  },

  async getAll() {
    const postCollection = await posts();

    const postList = await postCollection.find({}).toArray();
    const pstList = [];
    postList.forEach((item) => {
      let obj = item;
      obj._id = item._id.toString();
      // obj.name = item.name;
      pstList.push(obj);
    });

    return pstList;
  },

  async remove(id) {
    errorhandle.checkProperString(id, "Post ID");
    if (!ObjectId.isValid(id)) throw "Error: Not a valid ObjectId";
    let ID = ObjectId(id);

    const postCollection = await posts();

    const deletionInfo = await postCollection.deleteOne({ _id: ID });

    if (deletionInfo.deletedCount === 0) {
      throw `Error: Could not delete post with id of ${ID}`;
    }
    const commentCollection = await comments();
    const updatecInfo = await commentCollection.deleteMany({ postId: ID });
    if (!updatecInfo.deletedCount === 0)
      throw "Error: Update failed while removing comment from post";

    return { postId: id, deleted: true };
  },

  async update(id, title, body, isPublic) {
    errorhandle.checkProperString(id, "Post ID");
    if (!ObjectId.isValid(id)) throw "Error: Not a valid ObjectId";
    let ID = ObjectId(id);
    errorhandle.checkProperString(title, "Title");
    errorhandle.checkProperString(body, "Body");
    errorhandle.checkProperBoolean(isPublic, "isPublic");

    const post = await this.get(id);

    let updatedPost = {
      title: title,
      body: body,
      isPublic: isPublic,
      userThatPosted: post.userThatPosted,
      comments: post.comments,
      dateOfPost: post.dateOfPost,
    };

    const postCollection = await posts();
    const updateInfo = await postCollection.updateOne(
      { _id: ID },
      { $set: updatedPost }
    );
    if (!updateInfo.matchedCount && !updateInfo.modifiedCount)
      throw "Update failed";
    const postn = await this.get(id);

    return postn;
  },
  async addLikes(id, userID) {
    let ID = errorhandle.checkAndGetID(id, "Post ID");
    let uID = errorhandle.checkAndGetID(userID, "User ID");

    const post = await this.get(id);
    newLikes = post.likes;
    if (newLikes.includes(userID)) {
      let index = newLikes.indexOf(userID);
      if (index !== -1) {
        newLikes.splice(index, 1);
      }
    } else {
      newLikes.push(userID);
    }

    let updatedPost = {
      title: post.title,
      body: post.body,
      isPublic: post.isPublic,
      userThatPosted: post.userThatPosted,
      comments: post.comments,
      likes: newLikes,
      dateOfPost: post.dateOfPost,
    };

    const postCollection = await posts();
    const updateInfo = await postCollection.updateOne(
      { _id: ID },
      { $set: updatedPost }
    );
    if (!updateInfo.matchedCount && !updateInfo.modifiedCount)
      throw "Update failed";
    const postn = await this.get(id);

    return postn;
  },

  async addCommentToPost(postId, commentId, commentobj) {
    if (!ObjectId.isValid(postId)) throw "Error: Not a valid ObjectId";
    let ID = ObjectId(postId);

    if (!ObjectId.isValid(commentId)) throw "Error: Not a valid ObjectId";
    let commentID = ObjectId(commentId);

    // let currentPost = await this.get(postId);
    const postCollection = await posts();
    const updateInfo = await postCollection.updateOne(
      { _id: ID },
      {
        $push: {
          comments: {
            _id: commentID,
            userThatPostedComment: commentobj.userThatPostedComment,
            comment: commentobj.comment,
            dateOfCommment: commentobj.dateOfCommment,
          },
        },
      }
    );

    if (!updateInfo.matchedCount && !updateInfo.modifiedCount)
      throw "Update failed at adding comment to post";

    return await this.get(postId);
  },

  async removeCommentFromPost(postId, commentId) {
    if (!ObjectId.isValid(postId)) throw "Error: Not a valid ObjectId";
    let ID = ObjectId(postId);

    if (!ObjectId.isValid(commentId)) throw "Error: Not a valid ObjectId";
    let commentID = ObjectId(commentId);

    // let currentPost = await this.get(postId);

    const postCollection = await posts();
    const updateInfo = await postCollection.updateOne(
      { _id: ID },
      { $pull: { comments: { _id: commentID } } }
    );
    if (!updateInfo.matchedCount && !updateInfo.modifiedCount)
      throw "Error: Update failed while removing comment from post";

    return await this.get(postId);
  },
};
