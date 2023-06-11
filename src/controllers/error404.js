const controller = {}

  controller.error404 =  (req,res) => {
    req.send('<h1>ouch no existe esta pagina </h1>');
  };

module.exports = controller