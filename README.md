<div align="justify">

# API em Node.js para Extração de Dados de Feeds RSS 

# 📖 Visão Geral 
Este projeto foi desenvolvido como parte da avaliação das Sprints 2 e 3 do programa de bolsas **Compass UOL**, focado na formação em **Inteligência Artificial para AWS**.

O principal objetivo foi criar uma **API em Node.js**, dockerizada e hospedada em um **IP público na AWS**, capaz de armazenar e disponibilizar dados extraídos de um feed **RSS** do site [Terra.com](https://www.terra.com.br/).

# ✅ Funcionalidades Implementadas

### 🔧 Para isso, utilizamos as seguintes tecnologias:

- **VSCode** – Ambiente de desenvolvimento.
- **HTML & CSS** – Estilização da interface da API.
- **Node.js & JavaScript** – Backend da API.
- **Postman** – Testes das requisições HTTP.
- **Docker** – Contêinerização do projeto.
- **AWS EC2** – Hospedagem da API.
- **AWS S3** – Armazenamento dos dados extraídos.

## 📂 Estrutura do Projeto 

```plaintext
/Sprints-2-3-PB-AWS-JANEIRO  
│── /node_modules/                 # Dependências do projeto  
│── /src/                          # Código-fonte  
│   ├── /API/                      # Lógica da API  
│   │   ├── /Controller/             
│   │   │   ├── RSSController.js   # Controlador das rotas RSS  
│   │   ├── /Routes/               # Definição de rotas  
│   │   │   ├── RSSRoutes.js       # Rotas relacionadas ao RSS  
│   ├── /parse/                      
│   │   ├── feed.json              # Arquivo JSON com os dados do feed  
│   │   ├── parseRSS.js            # Script para processar RSS  
│── /public/                       # Arquivos estáticos  
│   ├── index.html                 # Página inicial  
│   ├── scripts.js                 # Scripts JavaScript da interface  
│   ├── styles.css                 # Estilização da página  
│── /Utils/                        # Utilitários do projeto  
│   ├── paths.js                   # Utilitário para manipulação de caminhos  
│── server.js                      # Servidor principal  
│── .gitignore                     # Arquivo para ignorar arquivos no Git  
│── Dockerfile                     # Configuração para container Docker  
│── package.json                   # Metadados e dependências do projeto  
│── package-lock.json              # Versões exatas das dependências  
│── README.md                      # Documentação do projeto                        
 ```

# 🔗 Como acessar o projeto? 

# 🚧 Dificuldades Enfrentadas 

#  📝 Atribuições de tarefas

As responsabilidades foram distribuídas da seguinte forma:

- **Amanda Campos e Roberta Kamilly:** Configuração do bucket S3 e da instância EC2 na AWS.
- **Carlos Eduardo e Leonardo de Freitas:** Desenvolvimento da API.
- **Roberta Kamilly:** Dockerização da API e documentação no README.
- **Amanda Campos e Carlos Eduardo:** Interface Gráfica e Estilização da página.
- **Amanda Campos:** Deploy do projeto na AWS.

<small>O projeto foi desenvolvido em equipe, com o objetivo de aplicar os conhecimentos adquiridos ao longo do programa. Cada integrante ficou responsável por uma parte específica do projeto, garantindo uma divisão equilibrada das tarefas.</small>  

<small>Para facilitar a colaboração e resolver dúvidas de forma eficiente, realizamos reuniões diárias, que também ajudaram a acompanhar o progresso de cada membro. Utilizamos as plataformas <b>Microsoft Teams</b> para a comunicação e organização do trabalho.</small>

# 🌐

## 👨‍💻 Autores  

**Amanda Campos Ximenes**  
  - GitHub: (https://github.com/AmandaCampoos)  
  - LinkedIn: (https://www.linkedin.com/in/amanda-campos-ximenes-a02ab8266)  

**Carlos Eduardo dos Santos Vital**  
  - GitHub: (https://github.com/CarlosEduardo-067)  
  - LinkedIn: (https://www.linkedin.com/in/carlos-eduardo-dos-santos-vital-9335612b1)

**Leonardo de Freitas Nogueira**  
  - GitHub: (https://github.com/leonardinfn)  
  - LinkedIn: (https://www.linkedin.com/in/leonardo-nogueira-a53419230)  

**Roberta Kamilly Magalhães de Oliveira**  
  - GitHub: (https://github.com/RobertakOliveira)  
  - LinkedIn: (https://www.linkedin.com/in/roberta-oliveira-b9a0961a4)  
 

## 🤝 Agradecimentos 
Agradecemos ao programa de bolsas Compass UOL pela oportunidade de aprendizado e crescimento.
Um obrigado especial aos instrutores, pelo suporte e dedicação que nos ajudaram a superar os desafios do projeto.
E, por fim, nosso reconhecimento aos autores deste projeto, que trabalharam com empenho e colaboração para alcançar este resultado.
</div>