const {response, request} = require('express');
const { param } = require('../routes/user');

const userGet = (req = request, res) => {
  const {q, nombre, page=1, apikey} = req.query;
  res.json({
    msj: 'GET API! - controlador',
    q,
    nombre,
    apikey,
    page
  });
}
const userPost = (request, response) => {
  const body = request.body;
  
  response.json({
    msj: 'POST API! - controlador',
    body
  });
}
const userPut = (req, res) => {
  const id2 = req.params;
  res.json({
    msj: 'GET PUT! - controlador',
    id2
  });
}
const userDelete = (req, res) => {
  res.json({
    msj: 'DELETE API! - controlador'
  });
}


module.exports = {
  userGet,
  userDelete,
  userPost,
  userPut
}