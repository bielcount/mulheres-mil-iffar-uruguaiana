const { ApiError } = require('../middlewares/errorHandler');
const Aluno = require('../models/Aluno');
const mongoose = require('mongoose');

// Busca todos oa alunos
exports.getAllAlunos = async (req, res, next) => {
  try {
    const alunos = await Aluno.find().populate('curso_id');
    res.status(200).json(alunos);
  } catch (error) {
    next(error);
  }
};

// Busca um aluno pelo id
exports.getAlunoById = async (req, res, next) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      throw new ApiError('ID inválido', 400, {
        suggestedFix: 'Forneça um ID válido no formato MongoDB',
        invalidId: req.params.id
      });
    }

    const aluno = await Aluno.findById(req.params.id).populate('curso_id');
    
    if (!aluno) {
      throw new ApiError('Aluno não encontrado', 404, {
        requestedId: req.params.id,
        suggestedFix: 'Verifique o ID ou busque na lista completa de alunos',
        endpoint: '/api/alunos'
      });
    }
    
    res.status(200).json(aluno);
  } catch (error) {
    next(error);
  }
};

// Cria um aluno
exports.createAluno = async (req, res, next) => {
  try {
    const aluno = new Aluno(req.body);
    await aluno.save();
    res.status(201).json(aluno);
  } catch (error) {
    if (error.name === 'ValidationError') {
      next(new ApiError('Dados inválidos', 400, {
        validationErrors: error.errors,
        suggestedFix: 'Verifique todos os campos obrigatórios'
      }));
    } else if (error.code === 11000) {
      next(new ApiError('Registro duplicado', 409, {
        duplicateField: Object.keys(error.keyPattern)[0],
        suggestedFix: 'Utilize um valor único para o campo duplicado'
      }));
    } else {
      next(error);
    }
  }
};

// Atualiza um aluno
exports.updateAluno = async (req, res) => {
  try {
    // 1. Pega os campos obrigatórios do schema
    const requiredFields = [];
    const schemaPaths = Aluno.schema.paths;
    
    for (const path in schemaPaths) {
      if (schemaPaths[path].isRequired && !path.startsWith('_')) {
        requiredFields.push(path);
      }
    }

    // 2. Verifica campos não permitidos
    const camposPermitidos = Object.keys(schemaPaths).filter(f => !f.startsWith('_'));
    const camposInvalidos = Object.keys(req.body).filter(f => !camposPermitidos.includes(f));

    if (camposInvalidos.length > 0) {
      return res.status(400).json({
        error: `Campos inválidos: ${camposInvalidos.join(', ')}`,
        camposPermitidos,
        camposObrigatorios: requiredFields
      });
    }

    // 3. Verifica campos obrigatórios para PUT
    if (req.method === 'PUT') {
      const missingFields = requiredFields.filter(f => !req.body[f]);
      
      if (missingFields.length > 0) {
        return res.status(400).json({
          error: `Campos obrigatórios faltando: ${missingFields.join(', ')}`,
          camposObrigatorios: requiredFields
        });
      }
    }

    // 4. Atualização
    const aluno = await Aluno.findByIdAndUpdate(
      req.params.id,
      req.method === 'PUT' ? req.body : { $set: req.body },
      { new: true }
    );

    if (!aluno) return res.status(404).json({ error: 'Aluno não encontrado' });

    res.json(aluno);

  } catch (err) {
    res.status(500).json({ 
      error: 'Erro no servidor',
      detalhes: err.message 
    });
  }
};

// Deleta um aluno
exports.deleteAluno = async (req, res, next) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      throw new ApiError('ID inválido', 400, {
        suggestedFix: 'Forneça um ID válido no formato MongoDB'
      });
    }

    const aluno = await Aluno.findByIdAndDelete(req.params.id);

    if (!aluno) {
      throw new ApiError('Aluno não encontrado', 404, {
        suggestedFix: 'Verifique se o ID corresponde a um aluno existente'
      });
    }

    res.status(200).json({ message: 'Aluno removido com sucesso' });
  } catch (error) {
    next(error);
  }
};