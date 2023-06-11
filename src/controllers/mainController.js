
const controller = {}

  controller.home = { 
    home:(req,res) => {
    res.render ('home',{
    title:'home'
  });
  }
};

  controller.login =  (req,res) => {
    res.render('logueo');
  };
  
  controller.logout =  (req,res) => {
    res.render('pagina de salida');
  };
  
  controller.register =  (req,res) => {
    res.render('registro');
  };
  
  controller.dashboard =  (req,res) => {
    res.render('creando listado de favoritos');
  };

 
  
  controller.error404 =  (req,res) => {
    req.send('<h1>ouch no existe esta pagina </h1>');
  };


  module.exports = controller