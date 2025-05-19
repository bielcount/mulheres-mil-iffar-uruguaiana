# 👩‍🎓 Programa Mulheres Mil – IFFar Campus Uruguaiana

O **Instituto Federal Farroupilha – Campus Uruguaiana** executará o **Programa Nacional Mulheres Mil** em 2025, por meio da oferta do curso **FIC (Formação Inicial e Continuada) de Vendedora**, com carga horária total de **160 horas**.

## 🎯 Sobre o Programa Mulheres Mil

Criado pela Secretaria de Educação Profissional e Tecnológica do Ministério da Educação (Setec/MEC), o **Programa Mulheres Mil** tem como objetivo promover a **formação profissional e tecnológica** de mulheres em situação de **vulnerabilidade social**, especialmente nas regiões Norte e Nordeste, mas com abrangência nacional.

O programa busca:
- Ampliar o acesso à educação profissional e tecnológica;
- Articular formação com aumento da escolaridade;
- Atender às **necessidades educacionais das comunidades** e às **vocações econômicas regionais**.

Instituído nacionalmente pela **Portaria nº 1.015 de 21 de julho de 2011**, passou a integrar políticas como a **Bolsa Formação do Pronatec** e atua em parceria com diversos ministérios, ofertando cursos em comunidades e também em **unidades prisionais femininas**.

## 🏫 Execução Local – Campus Uruguaiana

Em 2025, o **IFFar – Campus Uruguaiana** oferecerá o curso **FIC de Vendedora**, com carga horária de 160h, como parte do Programa Mulheres Mil.

### 👨‍💻 Integração com o Curso de ADS

A execução contará com a **participação ativa dos alunos e docentes do curso de Análise e Desenvolvimento de Sistemas (ADS)**, que colaborarão com:
- Aulas interdisciplinares;
- Atividades práticas e tecnológicas;
- Apoio técnico e pedagógico às participantes.

Essa integração visa fortalecer o compromisso institucional com a **inclusão social**, a **extensão universitária** e a **valorização da educação pública e transformadora**.

## 🤝 Compromisso com a Comunidade

A iniciativa busca não apenas **formar profissionalmente**, mas também **empoderar mulheres**, ampliando suas possibilidades de inserção no mundo do trabalho e sua autonomia social.

---

# 🔧 Tecnologias Utilizadas no Projeto Mulheres Mil

## 🖥️ Backend

### Node.js
- **Versão**: 18+
- **Função**: Ambiente de execução JavaScript server-side
- **Benefícios**: 
  - Alta performance com V8 engine
  - Event-loop para operações assíncronas
  - Ecossistema rico (npm)

### Express
- **Versão**: 4.x
- **Função**: Framework web para rotas e middlewares
- **Recursos usados**:
  - Sistema de roteamento (`app.get/post/put/delete`)
  - Middlewares (`express.json()`, `cors()`)
  - Tratamento de requisições/respostas

### MongoDB (Atlas)
- **Versão**: 6.0+
- **Função**: Banco de dados NoSQL
- **Por que usar**:
  - Schema flexível para dados acadêmicos
  - Escalabilidade horizontal
  - Consultas complexas com aggregation pipeline

### Mongoose
- **Versão**: 7.x
- **Função**: ODM (Object Data Modeling)
- **Principais features**:
  - Schemas com validação integrada
  - Middlewares (pre/post hooks)
  - Populate para relacionamentos

## 🛠️ Dependências Principais (package.json)

| Tecnologia  | Versão | Finalidade                              |
|-------------|--------|-----------------------------------------|
| Node.js     | 18.x   | Ambiente de execução JavaScript         |
| Express     | 4.18.2 | Framework para rotas HTTP               |
| MongoDB     | 6.x    | Banco de dados NoSQL                    |
| Mongoose    | 7.0.3  | Conexão e modelagem do MongoDB          |
| CORS        | 2.8.5  | Permite requisições entre domínios      |
| Dotenv      | 16.0.3 | Gerencia variáveis de ambiente          |
| Colors      | 1.4.0  | Formatação colorida no console          |

### Dependências de Desenvolvimento
| Tecnologia  | Versão | Uso                                     |
|-------------|--------|-----------------------------------------|
| Nodemon     | 2.0.22 | Reinício automático em desenvolvimento  |

## 🔄 Fluxo da Aplicação

    Cliente->>Servidor: Requisição HTTP (GET/POST/PUT/DELETE)
    Servidor->>MongoDB: Operação CRUD
    MongoDB-->>Servidor: Dados solicitados
    Servidor-->>Cliente: Resposta JSON


# 📚 Endpoints da API Mulheres Mil

## 👩🎓 Rotas de Alunos (`/api/alunos`)
| Método | Endpoint               | Descrição                           | Controller Method        |
|--------|------------------------|-------------------------------------|--------------------------|
| GET    | `/`                    | Lista todos os alunos               | `getAllAlunos`           |
| GET    | `/:id`                 | Busca aluno por ID                  | `getAlunoById`           |
| POST   | `/`                    | Cadastra novo aluno                 | `createAluno`            |
| PUT    | `/:id`                 | Atualiza todos dados do aluno       | `updateAluno`            |
| DELETE | `/:id`                 | Remove aluno                        | `deleteAluno`            |

## 📚 Rotas de Cursos (`/api/cursos`)
| Método | Endpoint               | Descrição                           | Controller Method        |
|--------|------------------------|-------------------------------------|--------------------------|
| GET    | `/`                    | Lista todos os cursos               | `getAllCursos`           |
| GET    | `/:id`                 | Busca curso por ID                  | `getCursoById`           |
| POST   | `/`                    | Cria novo curso                     | `createCurso`            |
| PUT    | `/:id`                 | Atualiza todos dados do curso       | `updateCurso`            |
| DELETE | `/:id`                 | Remove curso                        | `deleteCurso`            |

## 👨🏫 Rotas de Discentes (`/api/discentes`)
| Método | Endpoint               | Descrição                           | Controller Method        |
|--------|------------------------|-------------------------------------|--------------------------|
| GET    | `/`                    | Lista todos os discentes            | `getAllDiscentes`        |
| GET    | `/:id`                 | Busca discente por ID               | `getDiscenteById`        |
| POST   | `/`                    | Cadastra novo discente              | `createDiscente`         |
| PUT    | `/:id`                 | Atualiza todos dados do discente    | `updateDiscente`         |
| DELETE | `/:id`                 | Remove discente                     | `deleteDiscente`         |

## 📝 Rotas de Disciplinas (`/api/disciplinas`)
| Método | Endpoint               | Descrição                           | Controller Method        |
|--------|------------------------|-------------------------------------|--------------------------|
| GET    | `/`                    | Lista todas disciplinas             | `getAllDisciplinas`      |
| GET    | `/:id`                 | Busca disciplina por ID             | `getDisciplinaById`      |
| POST   | `/`                    | Cria nova disciplina                | `createDisciplina`       |
| PUT    | `/:id`                 | Atualiza todos dados da disciplina  | `updateDisciplina`       |
| DELETE | `/:id`                 | Remove disciplina                   | `deleteDisciplina`       |
| GET    | `/curso/:cursoId`      | Lista disciplinas por curso         | `getDisciplinasByCurso`  |

## ✅ Rotas de Frequência (`/api/frequencias`)
| Método | Endpoint               | Descrição                           | Controller Method        |
|--------|------------------------|-------------------------------------|--------------------------|
| GET    | `/`                    | Lista todas frequências             | `getAllFrequencias`      |
| GET    | `/:id`                 | Busca frequência por ID             | `getFrequenciaById`      |
| POST   | `/`                    | Registra nova frequência            | `createFrequencia`       |
| PUT    | `/:id`                 | Atualiza registro de frequência     | `updateFrequencia`       |
| DELETE | `/:id`                 | Remove registro de frequência       | `deleteFrequencia`       |
| GET    | `/aluno/:alunoId`      | Lista frequências por aluno         | `getFrequenciasByAluno`  |
| GET    | `/disciplina/:disciplinaId` | Lista frequências por disciplina | `getFrequenciasByDisciplina` |