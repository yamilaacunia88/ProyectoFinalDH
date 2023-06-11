const fs = require('fs');
const path = require('path');
const peliculasPath = path.join(__dirname,'../data/peliculas.json');

controller.home = { 
  getPeliculas: () =>{
    return JSON.parse(fs.readFileSync(peliculasPath,'utf-8'));
  },
  index:(req,res) => {
  res.render ('peliculas/index',{
  title:'Listado de peliculas',
  peliculasList: peliculasController.getPeliculas() 
});
  },
  show: (req,res) =>{
    let peliculasId = req.params.id;
    let peliculas = peliculasController.getPeliculas().find(peliculas => peliculas.id == peliculasId);
   
   res.render ('peliculas/show',{
      title:'mi peli',
      pelicula: peliculas 
   },
   
create: (req,res) =>{
  //implementar metodo
},
store: (req,res) =>{
  //implementar metodo
},
edit: (req,res) =>{
  //implementar metodo
},
update: (req,res) =>{
  //implementar metodo
 },
 delete: (req,res) =>{
  //implementar metodo
 },
 destroy: (req,res) =>{
  //implementar metodo
 },


module.exports = peliculasController;