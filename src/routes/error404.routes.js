const express = require('expres')
const router = express.Router()
const controller = require('../controllers/mainController');

 router.get("/",controller.error404)
 router.get('*', (req,res) =>{
  res
 .status(404)
 .send('<h1>ouch no existe esta pagina </h1>')
});

module.exports = router