
const express = require('expres')
const router = express.Router()
const controller = require('../controllers/homeController');

router.get("/", controller.home)

 
 router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/home.html"));
});


module.exports = router