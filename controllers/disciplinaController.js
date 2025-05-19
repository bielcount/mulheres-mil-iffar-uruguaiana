const { ApiError } = require('../middlewares/errorHandler');
const Disciplina = require('../models/Disciplina');
const mongoose = require('mongoose');

exports.getAllDisciplinas = async (req, res, next) => {
  try {
    const disciplinas = await Disciplina.find().populate('curso_id');
    res.status(200).json(disciplinas);
  } catch (error) {
    next(error);
  }
};

exports.getDisciplinaById = async (req, res, next) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      throw new ApiError('ID inválido', 400, {
        suggestedFix: 'Forneça um ID válido no formato MongoDB'
      });
    }

    const disciplina = await Disciplina.findById(req.params.id).populate('curso_id');
    
    if (!disciplina) {
      throw new ApiError('Disciplina não encontrada', 404, {
        suggestedFix: 'Verifique o ID ou liste todas as disciplinas'
      });
    }
    
    res.status(200).json(disciplina);
  } catch (error) {
    next(error);
  }
};

exports.createDisciplina = async (req, res, next) => {
  try {
    const disciplina = new Disciplina(req.body);
    await disciplina.save();
    res.status(201).json(disciplina);
  } catch (error) {
    if (error.name === 'ValidationError') {
      next(new ApiError('Dados inválidos', 400, {
        validationErrors: error.errors,
        suggestedFix: 'Verifique a carga horária e horários'
      }));
    } else if (error.code === 11000) {
      next(new ApiError('Código de disciplina duplicado', 409, {
        duplicateField: 'codigo',
        suggestedFix: 'Utilize um código único para a disciplina'
      }));
    } else {
      next(error);
    }
  }
};

exports.updateDisciplina = async (req, res, next) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      throw new ApiError('ID inválido', 400, {
        suggestedFix: 'Forneça um ID válido no formato MongoDB'
      });
    }

    const disciplina = await Disciplina.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!disciplina) {
      throw new ApiError('Disciplina não encontrada', 404, {
        suggestedFix: 'Verifique se o ID corresponde a uma disciplina existente'
      });
    }

    res.status(200).json(disciplina);
  } catch (error) {
    next(error);
  }
};

exports.deleteDisciplina = async (req, res, next) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      throw new ApiError('ID inválido', 400, {
        suggestedFix: 'Forneça um ID válido no formato MongoDB'
      });
    }

    const disciplina = await Disciplina.findByIdAndDelete(req.params.id);

    if (!disciplina) {
      throw new ApiError('Disciplina não encontrada', 404, {
        suggestedFix: 'Verifique se o ID corresponde a uma disciplina existente'
      });
    }

    res.status(200).json({ message: 'Disciplina removida com sucesso' });
  } catch (error) {
    next(error);
  }
};

exports.getDisciplinasByCurso = async (req, res, next) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.cursoId)) {
      throw new ApiError('ID de curso inválido', 400, {
        suggestedFix: 'Forneça um ID válido no formato MongoDB'
      });
    }

    const disciplinas = await Disciplina.find({ curso_id: req.params.cursoId });
    res.status(200).json(disciplinas);
  } catch (error) {
    next(error);
  }
};