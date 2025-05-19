const mongoose = require('mongoose');

const AlunoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  sobrenome: { type: String, required: true },
  cpf: { type: String, unique: true, sparse: true }, // add em prod. required: true,
  rg: { type: String, unique: true, sparse: true }, // add em prod. required: true,
  rg_emissor: { type: String, }, // add em prod. required: true,
  nis: { type: String, unique: true, sparse: true }, // sparse permite múltiplos documentos com campo ausente ou null
  inscricao_estadual: { type: String, unique: true, sparse: true },
  sexo: { type: String, enum: ['masc', 'fem'] }, // add em prod. required: true,
  escolaridade: { type: String, enum: ['fundamental', 'medio', 'superior'] }, // add em prod. required: true,
  empregado: { type: Boolean },
  ocupacao: { type: String },
  renda: { type: Number },
  vulnerabilidade_social: { type: Boolean },
  beneficiario_prog_social: { type: Boolean },
  prog_social: { type: String },
  matricula: { type: String, unique: true }, // add em prod. required: true,
  email: { type: String, unique: true, sparse: true }, // add em prod. required: true,
  ativo: { type: Boolean, default: true },
  curso_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Curso' }, // add em prod. required: true,
  cep: { type: String },
  logradouro: { type: String },
  numero: { type: String },
  complemento: { type: String },
  bairro: { type: String },
  localidade: { type: String },
  uf: { type: String },
  estado: { type: String },
  regiao: { type: String },
  ibge: { type: String },
  gia: { type: String },
  ddd: { type: String },
  siafi: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Aluno', AlunoSchema);