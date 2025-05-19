require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const { errorHandler } = require('./middlewares/errorHandler');
const Aluno = require('./models/Aluno'); 
const Curso = require('./models/Curso');
const Disciplina = require('./models/Disciplina');

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

// Rota Raiz 
app.get('/', async (req, res) => {
    try {
        const [totalAlunos, totalCursos, totalDisciplinas] = await Promise.all([
            Aluno.countDocuments(),
            Curso.countDocuments(),
            Disciplina.countDocuments()
        ]);

        res.json({
            projeto: "API Mulheres Mil - IFFAR Uruguaiana",
            descricao: "API RESTFULL desenvolvida para gestão acadêmica do programa Mulheres Mil no IFFar Campus Uruguaiana, oferecendo endpoints para controle de alunas, cursos, frequências e relatórios institucionais.",
            versao: "1.0.0",
            status: "Operacional",
            documentacao: "https://github.com/bielcount/mulheres-mil-iffar-uruguaiana",
            rotas_principais: {
                alunos: "/api/alunos",
                cursos: "/api/cursos",
                disciplinas: "/api/disciplinas",
                discentes: "/api/discentes",
                frequencias: "/api/frequencias"
            },
            instituicao: {
                nome: "Instituto Federal de Educação, Ciência e Tecnologia Farroupilha - IFFAR",
                campus: "Uruguaiana/RS",
                url: "https://iffar.edu.br/uruguaiana"
            },
            contato: {
                email: "gabriel.06056@aluno.iffar.edu.br",
                responsavel: "Gabriel Cardoso Fernandes"
            },
            tecnologias: ["Node.js", "Express", "MongoDB", "Mongoose"],
            ambiente: process.env.NODE_ENV || "desenvolvimento",
            repositorio: "https://github.com/bielcount/mulheres-mil-iffar-uruguaiana", 
            estatisticas: {
                total_alunos: totalAlunos,
                total_cursos: totalCursos,
                total_disciplinas: totalDisciplinas,
                ultima_atualizacao: new Date().toISOString()
            },
            contribuicoes: "Aceitamos contribuições! Veja o README.md",
            

            timestamp: new Date().toISOString()
        });
    } catch (error) {
        console.error('Erro na rota raiz:', error);
        res.status(500).json({
            error: "Erro ao obter estatísticas",
            detalhes: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
});

// Middleware de erro
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🔥 Servidor rodando na porta: ${PORT}`));