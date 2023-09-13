const DB = require("../constants/dataBase.js");

// Funkcija gauti vartotojus is JSON
async function getOldUsers() {
  try {
    const response = await fetch(DB.JSON_DB_URL);

    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    const oldUser = await response.json();
    return oldUser;
  } catch (error) {
    throw new Error(error.message);
  }
}

// Funkcija senus vartotojus pakeisti i norima formata
function formatUserData(oldUser) {
  return {
    _id: oldUser.id,
    name: oldUser.name,
    email: oldUser.email,
    address: `${oldUser.address.street}, ${oldUser.address.city}`,
  };
}

// Funkcija gauti senus vartotojus reikiamu formatu
async function getAndFormatOldUsers() {
  try {
    const oldUsers = await getOldUsers();
    const formattedOldUsers = oldUsers.map(formatUserData);

    return formattedOldUsers;
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = getAndFormatOldUsers;
