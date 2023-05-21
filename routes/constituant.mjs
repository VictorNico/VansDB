const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');
const middleware = require('../middlewares/auth');

router.post('/signup',  userCtrl.signup);
router.post('/login',  userCtrl.login);
router.post('/forgot_pwd',  userCtrl.forgot_pwd);
router.post('/update_account',  middleware ,userCtrl.update_account);

 

module.exports = router;