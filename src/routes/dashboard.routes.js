const express = require('expres')
const router = express.Router()
const controller = require('../controllers/mainController');


router.get("/", controller.dashboard)

router.get("/views/dashboard.html", (req, res) => {
  res.sendFile(__dirname + "./views/dashboard.html");
});

module.exports = router