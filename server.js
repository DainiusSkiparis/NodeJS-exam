const express = require("express");
const connectDb = require("./config/database.js");
const usersController = require("./controllers/usersController.js");

connectDb();
const server = express();

server.use(express.json());

server.use("/api/users", usersController);

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
