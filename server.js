const express = require("express");
const connectDb = require("./config/database.js");
const usersController = require("./controllers/usersController.js");

const DB = require("./common/constants/dataBase.js");

connectDb();
const server = express();

server.use(express.json());

server.use("/api/users", usersController);

server.listen(DB.PORT, () => {
  console.log(`Server is running on port ${DB.PORT}`);
});
