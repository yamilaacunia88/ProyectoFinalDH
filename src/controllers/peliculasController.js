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
  let peliculasId = req.params.id;
  let peliculas = peliculasController.getPeliculas().find(peliculas => peliculas.id == peliculasId);
 
 res.render ('peliculas/create',{
    title:'mi peli',
    pelicula: peliculas 
});
store: (req,res) =>{
  let peliculasId = req.params.id;
    let peliculas = peliculasController.getPeliculas().find(peliculas => peliculas.id == peliculasId);
   
   res.render ('peliculas/store',{
      title:'mi peli',
      pelicula: peliculas 
});

edit: (req,res) =>{
  let peliculasId = req.params.id;  
  let peliculas = peliculasController.getPeliculas().find(peliculas => peliculas.id == peliculasId);
 
 res.render ('peliculas/edit',{
    title:'mi peli',
    pelicula: peliculas 
});
 },
 update: (req,res) =>{ 
  let peliculasId = req.params.id;
  let pelicula = peliculasController.getPeliculas().find(peliculas => peliculas.id == peliculasId);
  let peliculas = peliculasController.getPeliculas();


 let peliculaUpdated = peliculas.forEach((pelicula,index) => {
  if (pelicula.id == peliculasId){
    pelicula.name = req.body.name;
    pelicula.year = req.body.year;
    peliculas[index] = pelicula; 
  }
 });

  fs.writeFileSync(peliculasPath,JSON.stringify(peliculas,null, ''));
  res.redirect('/peliculas');
});
  },
 delete: (req,res) =>{
  //implementar metodo
 });
 destroy: (req,res) =>{
  //implemetar metodo
 });


module.exports = peliculasController;