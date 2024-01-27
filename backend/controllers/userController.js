const mongoose = require('mongoose');
// const db = require('../db');
const User = require('../models/user');
const express = require('express');
const bcrypto = require('bcryptjs');
const router = express.Router();
const nodemailer = require('nodemailer');

exports.getAllUsers = async(req,res,next) => {
    
    let users;
    try{
        users = await User.find();
    }
    catch(e){console.log(e);}

    if(!users){
        return res.status(404).json({message: "No users found"});
    }
    return res.status(200).json({users});
};

exports.addNewUser = async(req, res, next) => {
    let { username, email, password } = req.body;
    if(!username && username.trim()==="" && !email && email.trim()==="" && !password && password.trim()==="")
    {
        return res.status(400).json({message: "Invalid Fields"});
    }
    
    let user;
    try{

        const existingUser = await User.findOne({email});
        if(existingUser)
        {
            return res.status(400).json({message: "User already exists"});
        }

        if(password.length < 7)
        {
            return res.status(401).json({message: "Minimum length password required"});
        }

        const newPass = bcrypto.hashSync(password);
        user = new User({username: username, email: email, password: newPass});
        
        await user.save();
        return res.status(200).json({message:  `Succesfully Inserted`,user});

    } catch(e) {console.log(e);res.status(500).json({message: "Internal Server Error"});}
};

exports.userLogin = async (req,res) => {
    const {username, password} = req.body;
    
    if(!username || username.trim() === "" || password.trim() === "" || !password) 
    {
        return res.status(400).json({message: "Invalid Fields"});
    }
    if(!password)
    {
        return res.status(400).json({message: "Invalid Fields"});
    }

    let user;
    try{
        user = await User.findOne({username: username});
    }
    catch(err){console.log(err);}
    if(!user)
    {
        return res.status(404).json({message: "User Not Found"});
    }
    
    const isPassCorrect = bcrypto.compareSync(password, user.password);

    if(!isPassCorrect)
    {
        return res.status(403).json({message: "Password Incorrect"});
    }

    return res.status(200).json({message: "Login Successful",user});
};

const useriSchema = new mongoose.Schema({
    username: {
       type: String,
       unique: true,
       trim: true
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    },
    password: {
        type: String,
        minLength: 8
    },
    verificationCode: {
        type: String
    }
});

const Useri = mongoose.model('Useri', useriSchema,"users",);

exports.verificationCode = async (req,res) => {
    const { email } = req.body;

    // Generate verification code (you may use a library for this)
    console.log(email);
    try {
        
        const existingUser = await User.findOne({ email:email });
        const dati = await User.find();
        
        console.log(existingUser,"user");
        console.log(dati,"data");
      
      if (!existingUser) {
          return res.status(404).send('Email not found in the database');
        }
        
    const verificationCode = Math.floor(1000 + Math.random() * 9000).toString();

    // return res.status(200).json({ "verificationCode": verificationCode});

    // Save verification code in the database
    await User.findOneAndUpdate({ email }, { verificationCode });

    // Send verification code via email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'suryasabbavarapu248@gmail.com',
        pass: 'mbuy uuix gvwd tnqy',
      },
    });

    const mailOptions = {
      from: 'suryasabbavarapu248@gmail.com',
      to: email,
      subject: 'Forgot Password Verification Code',
      text: `Your verification code is: ${verificationCode}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).send('Verification code sent successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

exports.getNewPassword = async (req,res) => {
    const { email, verificationCode, newPassword } = req.body;

    try {
      // Check if verification code matches
      const user = await User.findOne({ email, verificationCode });
  
      if (!user) {
        return res.status(400).send('Invalid verification code');
      }
      
      console.log(user,"USer");
      console.log(newPassword,"Vachindira Password");

      const newPass = bcrypto.hashSync(newPassword);
      // Update password
      user.password = newPass;
    //   user.verificationCode = undefined;
      await user.save();
  
      res.status(200).send('Password reset successfully');
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
};
