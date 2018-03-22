const express = require('express');

let app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req,res) => {
  res.send('hello');
})

app.set('port', process.env.PORT || 8080);

let server = app.listen(app.get('port'), () => {
  console.log(`app listening on http://localhost:${app.get('port')}`);
})