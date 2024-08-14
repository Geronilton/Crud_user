## Backend Node.js com Express
Este repositório contém a implementação do backend para um sistema de login e cadastro de usuários. Foi desenvolvido utilizando Node.js com Express e Sequelize para gerenciamento do banco de dados.

## Funcionalidades
- CRUD de Usuários: Criação, leitura, atualização e deleção de usuários.
- Autenticação: Login de usuários com verificação de credenciais.
  
##Estrutura do Projeto
- /config: Contém as configurações do banco de dados, incluindo o arquivo config.json que define as credenciais e detalhes da conexão.
- /migrations: Scripts de migração do banco de dados para criar as tabelas necessárias.
- /models: Modelos do Sequelize que representam as tabelas no banco de dados.
- /src: Contém a lógica do aplicativo, incluindo as rotas e controladores.
  
## Configuração do Banco de Dados
O projeto utiliza Sequelize como ORM para interagir com o banco de dados. As configurações do banco de dados podem ser modificadas no arquivo config/config.json. Este arquivo inclui detalhes como:

- dialect: O tipo de banco de dados que você está usando (e.g., mysql, postgres, sqlite).
- username: Nome de usuário para a conexão com o banco de dados.
- password: Senha para a conexão.
- database: Nome do banco de dados.
- host: Endereço do servidor do banco de dados.
  
## Executando Migrações
Para criar as tabelas necessárias no banco de dados, execute as migrações com o Sequelize CLI:

- npx sequelize-cli db:migrate
- 
##Como Executar

Clone o repositório:
git clone https://github.com/Geronilton/Crud_user.git
cd Crud_user

## Instale as dependências:
npm install

## Configure o Banco de Dados:

Edite o arquivo config/config.json para incluir as credenciais do seu banco de dados.

## Execute as migrações:

npx sequelize-cli db:migrate
## Inicie o servidor:
- npm start

O servidor estará rodando em http://localhost:3000.

Considerações Finais
Este backend foi desenvolvido com o objetivo de fornecer uma base sólida para a implementação de sistemas que requerem autenticação e gerenciamento de usuários. Ele pode ser expandido para incluir funcionalidades adicionais, como recuperação de senha, autenticação via token, entre outras.
