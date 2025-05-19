const { ApiError } = require('../middlewares/errorHandler');
const Frequencia = require('../models/Frequencia');
const mongoose = require('mongoose');

exports.getAllFrequencias = async (req, res, next) => {
  try {
    const frequencias = await Frequencia.find()
      .populate('aluno_id')
      .populate('discente_id')
      .populate('curso_id')
      .populate('disciplina_id');
    res.status(200).json(frequencias);
  } catch (error) {
    next(error);
  }
};

exports.getFrequenciaById = async (req, res, next) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      throw new ApiError('ID inválido', 400, {
        suggestedFix: 'Forneça um ID válido no formato MongoDB'
      });
    }

    const frequencia = await Frequencia.findById(req.params.id)
      .populate('aluno_id')
      .populate('discente_id')
      .populate('curso_id')
      .populate('disciplina_id');
    
    if (!frequencia) {
      throw new ApiError('Frequência não encontrada', 404, {
        suggestedFix: 'Verifique o ID ou liste todas as frequências'
      });
    }
    
    res.status(200).json(frequencia);
  } catch (error) {
    next(error);
  }
};

exports.createFrequencia = async (req, res, next) => {
  try {
    // Verifica se a data é válida
    if (req.body.data && isNaN(Date.parse(req.body.data))) {
      throw new ApiError('Data inválida', 400, {
        suggestedFix: 'Forneça uma data no formato YYYY-MM-DD'
      });
    }

    const frequencia = new Frequencia(req.body);
    await frequencia.save();
    res.status(201).json(frequencia);
  } catch (error) {
    if (error.name === 'ValidationError') {
      next(new ApiError('Dados inválidos', 400, {
        validationErrors: error.errors,
        suggestedFix: 'Verifique o status (presente/falta/falta_justificada)'
      }));
    } else {
      next(error);
    }
  }
};

exports.updateFrequencia = async (req, res, next) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      throw new ApiError('ID inválido', 400, {
        suggestedFix: 'Forneça um ID válido no formato MongoDB'
      });
    }

    const frequencia = await Frequencia.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!frequencia) {
      throw new ApiError('Frequência não encontrada', 404, {
        suggestedFix: 'Verifique se o ID corresponde a uma frequência existente'
      });
    }

    res.status(200).json(frequencia);
  } catch (error) {
    next(error);
  }
};

exports.deleteFrequencia = async (req, res, next) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      throw new ApiError('ID inválido', 400, {
        suggestedFix: 'Forneça um ID válido no formato MongoDB'
      });
    }

    const frequencia = await Frequencia.findByIdAndDelete(req.params.id);

    if (!frequencia) {
      throw new ApiError('Frequência não encontrada', 404, {
        suggestedFix: 'Verifique se o ID corresponde a uma frequência existente'
      });
    }

    res.status(200).json({ message: 'Frequência removida com sucesso' });
  } catch (error) {
    next(error);
  }
};

exports.getFrequenciasByAluno = async (req, res, next) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.alunoId)) {
      throw new ApiError('ID de aluno inválido', 400, {
        suggestedFix: 'Forneça um ID válido no formato MongoDB'
      });
    }

    const frequencias = await Frequencia.find({ aluno_id: req.params.alunoId })
      .populate('aluno_id')
      .populate('discente_id')
      .populate('curso_id')
      .populate('disciplina_id');
    res.status(200).json(frequencias);
  } catch (error) {
    next(error);
  }
};

exports.getFrequenciasByDisciplina = async (req, res, next) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.disciplinaId)) {
      throw new ApiError('ID de disciplina inválido', 400, {
        suggestedFix: 'Forneça um ID válido no formato MongoDB'
      });
    }

    const frequencias = await Frequencia.find({ disciplina_id: req.params.disciplinaId })
      .populate('aluno_id')
      .populate('discente_id')
      .populate('curso_id')
      .populate('disciplina_id');
    res.status(200).json(frequencias);
  } catch (error) {
    next(error);
  }
};