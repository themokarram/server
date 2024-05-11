const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const UserModel = mongoose.model("User", UserSchema); //UserModel takes two arguments first is the collection name in db and second is the schema created
module.exports = UserModel;
