const express = require('express');
const router = express.Router();
const frequenciaController = require('../controllers/frequenciaController');

router.get('/', frequenciaController.getAllFrequencias);
router.get('/:id', frequenciaController.getFrequenciaById);
router.post('/', frequenciaController.createFrequencia);
router.put('/:id', frequenciaController.updateFrequencia);
router.delete('/:id', frequenciaController.deleteFrequencia);
router.get('/aluno/:alunoId', frequenciaController.getFrequenciasByAluno);
router.get('/disciplina/:disciplinaId', frequenciaController.getFrequenciasByDisciplina);

module.exports = router;