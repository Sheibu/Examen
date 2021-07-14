const express = require('express');
const router = express.Router();

const quejaCtrl = require('../controllers/queja.controller');

router.get('/', quejaCtrl.getQuejas);
router.post('/', quejaCtrl.createQueja);
router.get('/:id', quejaCtrl.getQueja);
router.put('/:id', quejaCtrl.editQueja);
router.delete('/:id', quejaCtrl.deleteQueja);

module.exports = router;
