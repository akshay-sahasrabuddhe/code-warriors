const userRoutes = require("./users");
const postRoutes = require("./posts");
const commentRoutes = require("./comments");

const constructorMethod = (app) => {
  app.use("/posts", postRoutes);
  app.use("/comments", commentRoutes);
  app.use("/", userRoutes);

  app.use("*", (req, res) => {
    res.status(404).json({ error: "Not found" });
  });
};

module.exports = constructorMethod;
