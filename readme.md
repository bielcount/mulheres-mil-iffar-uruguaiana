[![Node.js](https://img.shields.io/badge/Node.js-18.x-brightgreen)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.18.2-blue)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green)](https://www.mongodb.com/)
[![Mongoose](https://img.shields.io/badge/Mongoose-7.0.3-red)](https://mongoosejs.com/)
[![Render](https://img.shields.io/badge/Deployed_on-Render-46E3B7?logo=render)](https://render.com/)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)


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

![image](https://github.com/user-attachments/assets/0d15f757-999e-4f41-81bb-eb0c03d4552d)

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

---

## 🗂️ Diagrama do Banco de Dados

![relacionamentoDB](https://github.com/user-attachments/assets/bff91744-90be-44ed-b777-36ce34b8527b)
https://dbdiagram.io/d/relacionamentoDB-6829a34f1227bdcb4ecf7080

# 🤝 Contribuindo

Contribuições são **muito bem-vindas**! 🚀

Se você encontrou um **bug**, tem uma **sugestão de melhoria** ou deseja **adicionar uma nova funcionalidade**, siga estes passos:

### 🐛 Reportar Problemas

- Abra uma **Issue** descrevendo claramente o problema, como reproduzir e, se possível, inclua prints ou logs.
- Use labels como `bug`, `enhancement`, `question` para categorizar melhor.
 
 ```markdown
**Descrição do Bug**  
[Descrição clara e concisa]

**Como Reproduzir**  
1. Acesse '...'
2. Clique em '....'
3. Role até '....'
4. Veja o erro

**Comportamento Esperado**  
[O que deveria acontecer]

**Contexto Adicional**  
- Dispositivo: [ex: iPhone 12]
- Versão da API: [ex: 1.2.3]
- Screenshots: [se possível]
```

## ⚙ Enviar Melhorias com Pull Requests

####  Fork do Repositório
- Vá até o repositório no GitHub.
- Clique em **Fork** (canto superior direito).

####  Clone o Repositório
```bash
git clone https://github.com/bielcount/mulheres-mil-iffar-uruguaiana
cd nome-do-repositorio
```

####  Configure o Upstream
```bash
git remote add upstream https://github.com/bielcount/mulheres-mil-iffar-uruguaiana
git fetch upstream
```

####  Crie uma Nova Branch e desenvolva
```bash
git checkout -b tipo/nome-da-mudanca
# Ex: feat/novo-endpoint
```

####  Commit das Alterações
```bash
git add .
git commit -m "tipo: mensagem do commit"
# Ex: feat: adiciona expressões regulares
```

####  Atualize com o Repositório Original
```bash
git pull upstream main
```

####  Envie sua Branch
```bash
git push origin tipo/nome-da-mudanca
```

####  Crie o Pull Request no GitHub
- Vá até seu repositório no GitHub.
- Clique em **Compare & pull request**.
- Preencha com:
  - O que foi alterado.
  - Por que foi alterado.
  - Qual issue está relacionada (ex: `resolve #12`).


✅ Pronto! Agora é só aguardar a análise e aprovação do seu Pull Request.
