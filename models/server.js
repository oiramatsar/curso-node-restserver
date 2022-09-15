const express = require('express')
const cors = require('cors')

class Server {
  constructor() {
    // propiedades
    this.app = express();    
    this.port = process.env.PORT;
    this.usuariosPath = '/api/usuarios';

    // middleware, son funciones que van a añadir otra funcionalidad al webserver
    this.middleware();

    this.routes();
  }

  // metodos

  middleware(){
    // CORS
    this.app.use(cors());
    // lectura y parseo del body
    this.app.use(express.static('public'));
    // directorio publico
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.usuariosPath, require ('../routes/user'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Example app listening on port ${this.port}`)
    })
  }
}

module.exports = Server;