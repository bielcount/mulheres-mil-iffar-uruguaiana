const express = require('express');
const router = express.Router();
const disciplinaController = require('../controllers/disciplinaController');

router.get('/', disciplinaController.getAllDisciplinas);
router.get('/:id', disciplinaController.getDisciplinaById);
router.post('/', disciplinaController.createDisciplina);
router.put('/:id', disciplinaController.updateDisciplina);
router.delete('/:id', disciplinaController.deleteDisciplina);
router.get('/curso/:cursoId', disciplinaController.getDisciplinasByCurso);

module.exports = router;