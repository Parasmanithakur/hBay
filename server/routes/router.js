const express = require("express");
const router = express.Router();
const users = require("../models/userSchema");
const login = require("../models/loginSchema");
const item = require("../models/itemSchema");
const jwt = require("jsonwebtoken");
//router.get("/", (req, res) => {
//   console.log("connect");
//});
//register user
router.post("/register", async (req, res) => {
  // console.log(req.body);
  const { name, email, age, mobile, work, add, desc } = req.body;

  if (!name || !email || !age || !mobile || !work || !add || !desc) {
    res.status(422).json("plz fill the data");
  }

  try {
    const preuser = await users.findOne({ email: email });
    console.log(preuser);

    if (preuser) {
      res.status(422).json("this is user is already present");
    } else {
      const adduser = new users({
        name,
        email,
        age,
        mobile,
        work,
        add,
        desc,
      });

      await adduser.save();
      res.status(201).json(adduser);
      console.log(adduser);
    }
  } catch (error) {
    res.status(422).json(error);
  }
});

//Get user
router.get("/getdata", async (req, res) => {
  try {
    const userData = await users.find();
    res.status(201).json(userData);
    console.log(userData);
  } catch (error) {
    res.status(422).json(error);
  }
});
// get indivual item
router.get("/getuser/:id", async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;
    const userindividual = await item.findById({ _id: id });
    console.log(userindividual);
    res.status(201).json(userindividual);
  } catch (error) {
    res.status(422).json(error);
  }
});
//Update user data

router.patch("/updateuser/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const updateduser = await users.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    console.log(updateduser);
    res.status(201).json(updateduser);
  } catch (error) {
    res.status(422).json(error);
  }
});
//delete user data
router.delete("/deleteuser/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletuser = await item.findByIdAndDelete({ _id: id });
    console.log(deletuser);
    res.status(201).json(deletuser);
  } catch (error) {
    res.status(422).json(error);
  }
});

//login database

router.post("/rlogin", async (req, res) => {
  // console.log(req.body);
  const { name, email, password } = req.body;

  if (!email || !password || !name) {
    res.status(422).json("plz fill the data");
  }

  try {
    const preuser = await login.findOne({ email: email });
    console.log(preuser);

    if (preuser) {
      res.status(422).json("this is user is already present");
    } else {
      const adduser = new login({
        name,
        email,
        password,
      });

      await adduser.save();
      res.status(201).json(adduser);
      console.log(adduser);
    }
  } catch (error) {
    res.status(422).json(error);
  }
});

//login user

router.post("/logincheck", async (req, res) => {
  // console.log(req.body);
  let token;
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(422).json("plz fill the data");
  }

  try {
    const preuser = await login.findOne({ email: email });
    console.log(preuser);

    if (preuser && preuser.password === password) {
      res.status(201).json(preuser);
      token = await preuser.generateAuthToken();
      //console.log(token);
      console.log(preuser);
    } else {
      res.status(422).json("incorrect");
    }
  } catch (error) {
    res.status(422).json(error);
  }
});
router.get("/login/:id", async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;
    const userindividual = await login.findById({ _id: id });
    console.log(userindividual);
    res.status(201).json(userindividual);
  } catch (error) {
    res.status(422).json(error);
  }
});

//item
router.post("/itemregister", async (req, res) => {
  // console.log(req.body);
  const { owner, url, condition, price, name } = req.body;

  if (!name || !url || !condition || !price || !owner) {
    res.status(422).json("plz fill the data");
  }

  try {
    const preuser = await item.findOne({ url: url });
    console.log(preuser);

    if (preuser) {
      res.status(422).json("this is item is already present");
    } else {
      const adduser = new item({
        owner,
        url,
        condition,
        price,
        name,
      });

      await adduser.save();
      res.status(201).json(adduser);
      console.log(adduser);
    }
  } catch (error) {
    res.status(422).json(error);
  }
});
router.get("/getitemdata", async (req, res) => {
  try {
    const userData = await item.find();
    res.status(201).json(userData);
    console.log(userData);
  } catch (error) {
    res.status(422).json(error);
  }
});
module.exports = router;
