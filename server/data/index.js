const usersData = require("./users");
const commentData = require("./comments");
const postData = require("./posts");
const errorhandlerData = require("./errorhandlers");
module.exports = {
  posts: postData,
  errorhandlers: errorhandlerData,
  comments: commentData,
  users: usersData,
};
