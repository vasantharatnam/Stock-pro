const express = require('express');
const router = express.Router();
const getAllUsers = require('../controllers/userController');

// const userRouter = express.Router();


router.get('/',getAllUsers.getAllUsers);
router.post('/login',getAllUsers.userLogin);
router.post('/signup',getAllUsers.addNewUser);
router.post('/verificationCode',getAllUsers.verificationCode);
router.post('/newPassword',getAllUsers.getNewPassword);

module.exports = router;