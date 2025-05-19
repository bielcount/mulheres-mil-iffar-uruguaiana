const mongoose = require('mongoose');

const FrequenciaSchema = new mongoose.Schema({
  aluno_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Aluno', required: true },
  discente_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Discente', required: true },
  curso_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Curso', required: true },
  disciplina_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Disciplina', required: true },
  data: { type: Date, required: true },
  status: { type: String, enum: ['presente', 'falta', 'falta_justificada'], required: true },
  observacao: { type: String },
  falta_justificada: { type: Boolean, default: false },
  documento_justificativa: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Frequencia', FrequenciaSchema);