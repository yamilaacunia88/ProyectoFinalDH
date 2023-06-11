const express = require('express');
const app = express()
const path = require("path");
const PORT = process.env.PORT || 3001;
const homeroutes = require ('./routes/homeroutes' );
const methodOverride = require('method-override');
const peliculasRoutes = require('../src/routes/peliculasroutes'); 

app.use(express.static('public'));

app.set('view engine', 'ejs');  
app.set('views', path.join(__dirname, 'views'));

app.use(homeroutes);
app.use(peliculasRoutes);

app.use(methodOverride(':method'));

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});

