const mongoose = require('mongoose');

const DiscenteSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true },
  ativo: { type: Boolean, default: true },
  disciplina_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Disciplina' },
  curso_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Curso' },
}, { timestamps: true });

module.exports = mongoose.model('Discente', DiscenteSchema);