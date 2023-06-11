const express = require('expres')
const router = express.Router()
const controller = require('../controllers/logoutController');

router.get("/", controller.logout)

router.get("/views/logout.html", (req, res) => {
  res.sendFile(__dirname + "./views/logout.html");
});

module.exports = router