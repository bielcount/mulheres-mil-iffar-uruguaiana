const mongoose = require('mongoose');

const CursoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  codigo: { type: String, unique: true, required: true },
  descricao: { type: String },
  carga_horaria: { type: Number, required: true },
  ativo: { type: Boolean, default: true },
  dia: { type: String, enum: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'], required: true },
}, { timestamps: true });

module.exports = mongoose.model('Curso', CursoSchema);