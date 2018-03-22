const express = require('express');
const ejs = require("ejs");

let app = express();

app.use(express.static(__dirname + '/public'));

app.set("view engine", "ejs");

app.get('/', (req,res) => {
  res.render('txt');
})

app.set('port', process.env.PORT || 8080);

let server = app.listen(app.get('port'), () => {
  console.log(`app listening on http://localhost:${app.get('port')}`);
})