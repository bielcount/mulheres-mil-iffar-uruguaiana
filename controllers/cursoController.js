const { ApiError } = require('../middlewares/errorHandler');
const Curso = require('../models/Curso');
const mongoose = require('mongoose');

exports.getAllCursos = async (req, res, next) => {
  try {
    const cursos = await Curso.find();
    res.status(200).json(cursos);
  } catch (error) {
    next(error);
  }
};

exports.getCursoById = async (req, res, next) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      throw new ApiError('ID inválido', 400, {
        suggestedFix: 'Forneça um ID válido no formato MongoDB'
      });
    }

    const curso = await Curso.findById(req.params.id);
    
    if (!curso) {
      throw new ApiError('Curso não encontrado', 404, {
        suggestedFix: 'Verifique o ID ou liste todos os cursos'
      });
    }
    
    res.status(200).json(curso);
  } catch (error) {
    next(error);
  }
};

exports.createCurso = async (req, res, next) => {
  try {
    const curso = new Curso(req.body);
    await curso.save();
    res.status(201).json(curso);
  } catch (error) {
    if (error.name === 'ValidationError') {
      next(new ApiError('Dados inválidos', 400, {
        validationErrors: error.errors,
        suggestedFix: 'Verifique os dias da semana e carga horária'
      }));
    } else if (error.code === 11000) {
      next(new ApiError('Código de curso duplicado', 409, {
        duplicateField: 'codigo',
        suggestedFix: 'Utilize um código único para o curso'
      }));
    } else {
      next(error);
    }
  }
};

exports.updateCurso = async (req, res, next) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      throw new ApiError('ID inválido', 400, {
        suggestedFix: 'Forneça um ID válido no formato MongoDB'
      });
    }

    const curso = await Curso.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!curso) {
      throw new ApiError('Curso não encontrado', 404, {
        suggestedFix: 'Verifique se o ID corresponde a um curso existente'
      });
    }

    res.status(200).json(curso);
  } catch (error) {
    next(error);
  }
};

exports.deleteCurso = async (req, res, next) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      throw new ApiError('ID inválido', 400, {
        suggestedFix: 'Forneça um ID válido no formato MongoDB'
      });
    }

    const curso = await Curso.findByIdAndDelete(req.params.id);

    if (!curso) {
      throw new ApiError('Curso não encontrado', 404, {
        suggestedFix: 'Verifique se o ID corresponde a um curso existente'
      });
    }

    res.status(200).json({ message: 'Curso removido com sucesso' });
  } catch (error) {
    next(error);
  }
};