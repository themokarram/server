const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const UserModel = require("./models/Users");
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/mern-crud");

app.post("/createUser", async (req, res) => {
  //req is the data that Backend gets from frontend and res the data (response) Backend sends to frontend
  const postedDataFromFE = req.body;
  const user = new UserModel(postedDataFromFE);
  try {
    await user.save();
    res.send(user);
  } catch (error) {
    console.log(error);
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find();
    res.send(users);
  } catch (error) {
    console.log(error);
  }
});
app.delete("/users/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await UserModel.findByIdAndDelete(id);
    res.send("Data deleted successfully");
  } catch (error) {
    console.log(error);
  }
});
app.put("/users/update/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;
  try {
    await UserModel.findByIdAndUpdate(id, { name, email, age });
    res.send("Data updated successfully");
  } catch (error) {
    console.log(error);
  }
});
app.listen(5000, () => {
  console.log("server is running on port 5000");
});
