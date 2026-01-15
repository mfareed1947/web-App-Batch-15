const express = require("express");
const { connectDB } = require("./config/database");
const { User } = require("./model/user");
const validator = require('validator');
require("dotenv").config();
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// app.post('/addUser', async (req, res)=>{
//    try {
//      const {
//     firstName,
//     lastName,
//     age,
//     email,
//     password,
//     gender,
//      } = req.body;

//    const user = await User({
//     firstName,
//     lastName,
//     age,
//     email,
//     password,
//     gender,
//    });
//    await user.save()

//     res.send('User created !' )
//    } catch (error) {
//     res.status(400).send({
//         message : "Bad Request",
//         error: error.message
//     })
//    }
// })

app.post("/signup", async (req, res) => {
  try {
    const { firstName, lastName, age, email, password, gender } = req.body;

    // Step 1: Validate input fields
    if(!firstName){
        throw new Error('First name is required')
    }else if(!validator.isEmail(email)){
        throw new Error('Invalid Email')
    }else if(!validator.isStrongPassword(password)){
        throw new Error('Please use a strong password !')
    }

    // Step 2: Check if user already exists

    const user = await User.findOne({email})

    if(user){
        throw new Error('User already exists with this email')
    }

    // Step:3: Hash the password


    const hashedPassword = await bcrypt.hash(password, 10);

    // Step 4: Create new user
    const newUser = await User({
        firstName,
        lastName,
        age,
        email,
        password: hashedPassword,
        gender
    })


    await newUser.save();


    res.send({
        message: "User created successfully",
        user: newUser
    });



  } catch (error) {
    res.status(400).send({
      message: "Bad Request",
      error: error.message,
    });
  }
});

const PORT = process.env.PORT || 3000;

connectDB()
  .then(() => {
    console.log("Database connected successfully");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Database connection failed", err);
  });
