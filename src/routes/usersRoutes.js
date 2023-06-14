const express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController');


// formulario register
router.get('/register', usersController.register);
router.post ("/register", usersController.processRegister);

//formulario Login
router.get('/login', usersController.login);
router.post("/login", usersController.processLogin)

module.exports = router;