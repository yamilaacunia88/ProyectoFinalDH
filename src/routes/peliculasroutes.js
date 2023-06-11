const express= require('express');
const router = express.Router();
const peliculasController = require('../controllers/peliculasController');

//listado de peliculas
router.get('/', mainController.index);
//ver producto
router.get('/:id', mainController.show);
//crecacion de peli
router.get('/create', mainController.create);
router.post('/create', mainController.store);
//actualizar peli
router.get('/edit/:id', mainController.edit);
router.put('/edit/:id', mainController.update);
//eliminar peli
router.get('/delete:id', mainController.delete);
router.delete('/delete:id', mainController.destroy);

module.exports = router