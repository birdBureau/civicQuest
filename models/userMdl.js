const hash = require("pbkdf2-password");

const users = {
  bird: { name: "Bird Bureau" },
};

// when you create a user, generate a salt
// and hash the password ('foobar' is the pass here)

hash({ password: "bureau" }, function(err, pass, salt, hash) {
  if (err) throw err;
  // store the salt & hash in the "db"
  users.bird.salt = salt;
  users.bird.hash = hash;
});

module.exports = users;
