const { ApiError } = require('../middlewares/errorHandler');
const Discente = require('../models/Discente');
const mongoose = require('mongoose');

exports.getAllDiscentes = async (req, res, next) => {
  try {
    const discentes = await Discente.find().populate(['curso_id', 'disciplina_id']);
    res.status(200).json(discentes);
  } catch (error) {
    next(error);
  }
};

exports.getDiscenteById = async (req, res, next) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      throw new ApiError('ID inválido', 400, {
        suggestedFix: 'Forneça um ID válido no formato MongoDB'
      });
    }

    const discente = await Discente.findById(req.params.id).populate(['curso_id', 'disciplina_id']);
    
    if (!discente) {
      throw new ApiError('Discente não encontrado', 404, {
        suggestedFix: 'Verifique o ID ou liste todos os discentes'
      });
    }
    
    res.status(200).json(discente);
  } catch (error) {
    next(error);
  }
};

exports.createDiscente = async (req, res, next) => {
  try {
    const discente = new Discente(req.body);
    await discente.save();
    res.status(201).json(discente);
  } catch (error) {
    if (error.name === 'ValidationError') {
      next(new ApiError('Dados inválidos', 400, {
        validationErrors: error.errors,
        suggestedFix: 'Verifique todos os campos obrigatórios'
      }));
    } else if (error.code === 11000) {
      next(new ApiError('Email já cadastrado', 409, {
        duplicateField: 'email',
        suggestedFix: 'Utilize outro email ou recupere a senha'
      }));
    } else {
      next(error);
    }
  }
};

exports.updateDiscente = async (req, res, next) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      throw new ApiError('ID inválido', 400, {
        suggestedFix: 'Forneça um ID válido no formato MongoDB'
      });
    }

    const discente = await Discente.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!discente) {
      throw new ApiError('Discente não encontrado', 404, {
        suggestedFix: 'Verifique se o ID corresponde a um discente existente'
      });
    }

    res.status(200).json(discente);
  } catch (error) {
    next(error);
  }
};

exports.deleteDiscente = async (req, res, next) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      throw new ApiError('ID inválido', 400, {
        suggestedFix: 'Forneça um ID válido no formato MongoDB'
      });
    }

    const discente = await Discente.findByIdAndDelete(req.params.id);

    if (!discente) {
      throw new ApiError('Discente não encontrado', 404, {
        suggestedFix: 'Verifique se o ID corresponde a um discente existente'
      });
    }

    res.status(200).json({ message: 'Discente removido com sucesso' });
  } catch (error) {
    next(error);
  }
};