require('colors');
const mongoose = require('mongoose');

const errorHandler = (err, req, res, next) => {
    // Configura timeout de 10 segundos
    req.setTimeout(10000, () => {
        if (!res.headersSent) {
            return res.status(504).json({
                success: false,
                error: {
                    type: "RequestTimeout",
                    message: "O servidor não respondeu a tempo",
                    suggestedFix: "Verifique sua conexão ou tente novamente mais tarde",
                    timestamp: new Date().toISOString()
                }
            });
        }
    });

    // Log completo do erro (apenas em desenvolvimento)
    if (process.env.NODE_ENV === 'development') {
        console.error('\n=== ERRO DETECTADO ==='.red);
        console.error('📌 Tipo:', err.name?.yellow || 'ErroDesconhecido');
        console.error('📌 Mensagem:', err.message?.red);
        console.error('📌 Stack:', err.stack?.grey);
        console.error('📌 URL:', req.originalUrl?.cyan);
        console.error('📌 Método:', req.method?.cyan);
        console.error('========================\n'.red);
    }

    // Tratamento de erros específicos
    let statusCode = err.statusCode || 500;
    let errorResponse = {
        success: false,
        error: {
            type: err.name || 'InternalServerError',
            message: err.message || 'Ocorreu um erro inesperado',
            timestamp: new Date().toISOString(),
            path: req.originalUrl
        }
    };

    // Mongoose Validation Error
    if (err instanceof mongoose.Error.ValidationError) {
        statusCode = 422;
        errorResponse.error.type = 'ValidationError';
        errorResponse.error.details = {};
        errorResponse.error.suggestedFix = 'Verifique os campos obrigatórios:';
        
        for (const field in err.errors) {
            errorResponse.error.details[field] = {
                message: err.errors[field].message,
                type: err.errors[field].kind
            };
            errorResponse.error.suggestedFix += ` ${field},`;
        }
    } 
    // MongoDB Duplicate Key
    else if (err.code === 11000) {
        statusCode = 409;
        const field = Object.keys(err.keyPattern)[0];
        errorResponse.error = {
            type: 'DuplicateKeyError',
            message: `O valor '${err.keyValue[field]}' já existe para o campo '${field}'`,
            suggestedFix: `Use um valor único para ${field}`,
            duplicateField: field,
            value: err.keyValue[field]
        };
    } 
    // ID Inválido
    else if (err instanceof mongoose.Error.CastError) {
        statusCode = 400;
        errorResponse.error = {
            type: 'InvalidIdError',
            message: `ID inválido: ${err.value}`,
            suggestedFix: 'Forneça um ObjectId válido',
            path: err.path
        };
    }
    // Erros operacionais customizados (ApiError)
    else if (err.isOperational) {
        errorResponse.error = { 
            ...errorResponse.error,
            ...err,
            type: err.name
        };
    } 
    // Erros não tratados (ocultar detalhes em produção)
    else {
        errorResponse.error.message = 'Erro interno no servidor';
        if (process.env.NODE_ENV === 'development') {
            errorResponse.error.stack = err.stack;
        }
    }

    // Resposta final
    res.status(statusCode).json(errorResponse);
};

class ApiError extends Error {
    constructor(message, statusCode = 500, details = {}) {
        super(message);
        this.name = this.constructor.name;
        this.statusCode = statusCode;
        this.isOperational = true;
        Object.assign(this, details);
        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = { errorHandler, ApiError };