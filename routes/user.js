// vamos a desestructurar algo del paquete de express
const { Router } = require('express');
const { userGet, userDelete, userPost, userPut } = require('../controllers/user');
// llamamos a la funcion
const router = Router();

router.get('/', userGet);
router.post('/', userPost);
router.put('/:id', userPut);
router.delete('/', userDelete);


module.exports = router; 