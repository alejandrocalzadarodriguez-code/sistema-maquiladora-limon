
// Rutas Lote
const express = require('express');
const router = express.Router();
const controller = require('../controllers/loteController');

router.get('/', controller.getAll);

module.exports = router;
