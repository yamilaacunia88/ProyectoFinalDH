// Raiz
//about
//contacto
//loguin
//logout
const express = require('expres');
const routerx= express.Router();
const mainController = require('../controllers/mainController');

router.get("/", mainController.home)

 router.get("/login", (req,res) => {
  res.send('');
 });  


module.exports = router;