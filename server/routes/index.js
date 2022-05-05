const userRoutes = require("./users");
const postRoutes = require("./posts");
const commentRoutes = require("./comments");
const videosRoutes = require("./videos");
const cors = require("cors");
const friendRoutes = require("./friends");

const constructorMethod = (app) => {
  app.use(
    cors({
      origin: ["http://localhost:4000"],
      methods: ["GET", "POST"],
      credentials: true,
    })
  );
  app.use("/posts", postRoutes);
  app.use("/comments", commentRoutes);
  app.use("/videos", videosRoutes);
  app.use("/", userRoutes);
  app.use("/friend", friendRoutes);

  app.use("*", (req, res) => {
    res.status(404).json({ error: "Not found" });
  });
};

module.exports = constructorMethod;
