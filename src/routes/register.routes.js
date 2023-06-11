const express = require('expres')
const router = express.Router()
const controller = require('../controllers/registerController');

router.get("/", controller.register)


router.get("./views/register.html", (req, res) => {
  res.sendFile(__dirname + "./views/register.html");
});

module.exports = router