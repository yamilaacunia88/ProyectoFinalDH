const express = require('express');
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;
let fs = require('fs');
//implementando rutas

app.use(express.static('public'));

app.listen(PORT, () => console.log ('servidor corriendo en puerto $(PORT)'));

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "./views/index.html"));
});

app.get("/views/index.html", (req,res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.get("/views/login.html", (req,res) => {
    res.sendFile(__dirname + "/views/login.html");
});

app.get("/views/register.html", (req,res) => {
    res.sendFile(__dirname + "/views/register.html");
});

app.get("/views/dashboard.html", (req,res) => {
  res.sendFile(__dirname + "/views/dashboard.html");
});