
const express = require('expres')
const router = express.Router()
const controller = require('../controllers/omeController');

router.get("/", controller.login)

router.get("/views/login.html", (req, res) => {
  res.sendFile(__dirname + "./views/login.html");
});

module.exports = router
