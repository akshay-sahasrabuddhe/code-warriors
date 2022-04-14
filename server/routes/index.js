const userRoutes = require("./users");
const postRoutes = require("./posts");

const constructorMethod = (app) => {
  app.use("/posts", postRoutes);
  app.use("/", userRoutes);

  app.use("*", (req, res) => {
    res.status(404).json({ error: "Not found" });
  });
};

module.exports = constructorMethod;
