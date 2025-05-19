const express = require('express');
const router = express.Router();
const discenteController = require('../controllers/discenteController');

router.get('/', discenteController.getAllDiscentes);
router.get('/:id', discenteController.getDiscenteById);
router.post('/', discenteController.createDiscente);
router.put('/:id', discenteController.updateDiscente);
router.delete('/:id', discenteController.deleteDiscente);

module.exports = router;