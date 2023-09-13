const express = require("express");
const router = express.Router();
const User = require("../models/user.Model.js");
const mergeUsersData = require("../common/utils/getMergedUsers.js");
const getAndFormatOldUsers = require("../common/utils/getFormatedOldUsers.js");
const auth = require("../common/middleware/authMiddleware.js");

// GET - Gauti visus senus ir naujus vartotojus
router.get("/", auth, async (_, res) => {
  try {
    const mergedUsers = await mergeUsersData();
    res.status(200).json(mergedUsers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET - Gauti vartotoju vardus
router.get("/names", auth, async (_, res) => {
  try {
    const mergedUsers = await mergeUsersData();
    const formattedUsers = mergedUsers.map((user) => ({
      _id: user._id,
      name: user.name,
    }));

    res.status(200).json(formattedUsers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET - Gauti vartotoju vardus ir emailus
router.get("/emails", auth, async (_, res) => {
  try {
    const mergedUsers = await mergeUsersData();
    const formattedUsers = mergedUsers.map((user) => ({
      _id: user._id,
      name: user.name,
      email: user.email,
    }));

    res.status(200).json(formattedUsers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET - Gauti vartotoju vardus ir adresus
router.get("/address", auth, async (_, res) => {
  try {
    const mergedUsers = await mergeUsersData();
    const formattedUsers = mergedUsers.map((user) => ({
      _id: user._id,
      name: user.name,
      address: user.address,
    }));

    res.status(200).json(formattedUsers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST - Ikelti i DB naują vartotoja
router.post("/", auth, async (req, res) => {
  try {
    const { name, email, street, city } = req.body;
    const address = `${street}, ${city}`;
    const user = new User({ name, email, address });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET - Gauti visus naujus vartotojus
router.get("/new", auth, async (_, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET - Gauti visus senus vartotojus
router.get("/old", auth, async (_, res) => {
  try {
    const FormatOldUsers = await getAndFormatOldUsers();
    res.status(200).json(FormatOldUsers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
