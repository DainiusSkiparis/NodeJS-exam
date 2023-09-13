const https = require("https");
const User = require("../../models/user.Model.js");

// Funkcija gauti vartotojus is JSON
function getOldUsers() {
  return new Promise((resolve, reject) => {
    https
      .get("https://jsonplaceholder.typicode.com/users", (response) => {
        let data = "";

        response.on("data", (section) => {
          data += section;
        });

        response.on("end", () => {
          const oldUsers = JSON.parse(data);
          resolve(oldUsers);
        });
      })
      .on("error", (error) => {
        console.error("Error:", error);
        reject(error);
      });
  });
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

module.exports = { getAndFormatOldUsers };
