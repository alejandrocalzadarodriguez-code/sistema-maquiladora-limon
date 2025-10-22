const express = require('express');
const router = express.Router();
const proveedorController = require('../controllers/proveedorController');

router.get('/', proveedorController.getAll);
router.post('/', proveedorController.create);
router.get('/:id', proveedorController.getById);
router.put('/:id', proveedorController.update);
router.delete('/:id', proveedorController.delete);

module.exports = router;
