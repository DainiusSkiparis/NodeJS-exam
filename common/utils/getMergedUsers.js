const { getAndFormatOldUsers } = require("./getFormatedOldUsers");
const User = require("../../models/user.Model.js");

// Funkcija sujungti senus ir naujus vartotojus
async function mergeUsersData() {
  try {
    const [formattedOldUsers, databaseUsers] = await Promise.all([
      getAndFormatOldUsers(),
      User.find({}, { _id: 1, name: 1, email: 1, address: 1 }),
    ]);

    const mergedUsers = [...formattedOldUsers, ...databaseUsers];
    return mergedUsers;
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = {
  mergeUsersData,
};
