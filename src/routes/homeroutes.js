
const express = require('expres')
const router = express.Router()
const controller = require('../controllers/mainController');

router.get("/", controller.home)

 
 router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/home.html"));
});

router.get("/",controller.error404)

router.get('*', (req,res) =>{
 res
.status(404)
.send('<h1>ouch no existe esta pagina </h1>')
});

router.get("/", controller.login)

router.get("/views/login.html", (req, res) => {
  res.sendFile(__dirname + "./views/login.html");
});


router.get("/", controller.logout)

router.get("/views/logout.html", (req, res) => {
  res.sendFile(__dirname + "./views/logout.html");
});

router.get("/", controller.register)


router.get("./views/register.html", (req, res) => {
  res.sendFile(__dirname + "./views/register.html");
});

router.get("/", controller.dashboard)

router.get("/views/dashboard.html", (req, res) => {
  res.sendFile(__dirname + "./views/dashboard.html");
});

module.exports = router