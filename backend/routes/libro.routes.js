const express = require('express');
const router = express.Router();

const libroCtrl = require('../controllers/libro.controller');

router.get('/', libroCtrl.getLibros);
router.post('/', libroCtrl.createLibro);
router.get('/:id', libroCtrl.getLibro);
router.put('/:id', libroCtrl.editLibro);
router.delete('/:id', libroCtrl.deleteLibro);

module.exports = router;
