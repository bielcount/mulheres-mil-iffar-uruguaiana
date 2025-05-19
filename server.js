require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const { errorHandler } = require('./middlewares/errorHandler');

const app = express();

// Conectar ao MongoDB
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/alunos', require('./routes/alunoRoutes'));
app.use('/api/cursos', require('./routes/cursoRoutes'));
app.use('/api/disciplinas', require('./routes/disciplinaRoutes'));
app.use('/api/discentes', require('./routes/discenteRoutes'));
app.use('/api/frequencias', require('./routes/frequenciaRoutes'));

// Middleware de erro
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🔥 Servidor rodando na porta: ${PORT} `));