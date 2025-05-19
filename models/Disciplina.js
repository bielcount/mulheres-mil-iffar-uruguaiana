const mongoose = require('mongoose');

const DisciplinaSchema = new mongoose.Schema({
  curso_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Curso', required: true },
  nome: { type: String, required: true },
  codigo: { type: String, unique: true, required: true },
  professor: { type: String, required: true },
  carga_horaria: { type: Number, required: true },
  horario: { type: String, required: true },
  ativo: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model('Disciplina', DisciplinaSchema);