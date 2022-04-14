const usersData = require("./users");
const postData = require("./posts");
const errorhandlerData = require("./errorhandlers");
module.exports = {
  posts: postData,
  errorhandlers: errorhandlerData,
  users: usersData,
};
