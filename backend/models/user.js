const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const userSchema = new mongoose.Schema({
    username: {
       type: String,
       required: true,
       unique: true,
       trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    },
    verificationCode: {
        type: String
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;