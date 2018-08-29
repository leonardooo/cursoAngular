var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')

var app = express();
app.use(cors())

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: true }));

//create application/json parser
app.use(bodyParser.json());

function Curso(id, descricao) {
  this.id = id;
  this.descricao = descricao;
}

const CURSOS = [
 { id: 1, descricao: 'Angular' },
 { id: 2, descricao: 'JavaScript' },
 { id: 3, descricao: 'TypeScript' },
];
var SEQUENCE = 4;

app.get('/api/cursos', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin','*');

  res.json(CURSOS);
});

app.get('/api/cursos/:id', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin','*');

  const result = CURSOS.find(c => c.id === +req.params['id']);
  if (!result) {
    res.sendStatus(404); // 404 Not Found
  } else {
    res.json(result);
  }
});

app.post('/api/cursos', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin','*');

  CURSOS.push(new Curso(SEQUENCE++, req.body.descricao));
  res.sendStatus(200);
});

app.put('/api/cursos', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin','*');

  const index = CURSOS.findIndex(c => c.id === +req.body.id);
  if (index === -1) {
    res.sendStatus(400); // 400 Bad Request
  } else {
    const curso = new Curso(req.body.id, req.body.descricao);
    CURSOS.splice(index, 1, curso);
    res.sendStatus(200);
  }
});


app.delete('/api/cursos/:id', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin','*');

  const index = CURSOS.findIndex(c => c.id === +req.params['id']);
  if (index === -1) {
    res.sendStatus(400); // 400 Bad Request
  } else {
    CURSOS.splice(index, 1);
    res.sendStatus(200);
  }
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
