const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://dskiparis:VrMJx3R0zaWbq2jk@cluster0.jcad8kj.mongodb.net/api"
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDb;
