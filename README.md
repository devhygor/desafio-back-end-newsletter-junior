# Desafio Back-end Newsletter - Junior

Esse projeto consiste em uma API REST que permite a inscrição de usuários através de um formulário e a busca de inscrições realizadas em um determinado período de tempo. Além disso, é possível verificar se o email fornecido na inscrição é válido e não há duplicação de registros no banco de dados.

## Pré-requisitos

Antes de começar, é necessário ter instalado na máquina:

- Node.js (versão 14 ou superior)
- Postgres

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/devhygor/desafio-back-end-newsletter-junior.git
```

2. Acesse a pasta do projeto:
```bash
cd desafio-back-end-newsletter-junior
```

3. Instale as dependências do projeto:
```bash
npm install
```

4. Crie um banco de dados PostgreSQL com o nome `formulario_precato` ou outro nome de sua preferência.

5. Crie o arquivo `.env` na raiz do projeto com as seguintes variáveis de ambiente:
```bash
PGUSER=postgres
PGHOST=localhost
PGDATABASE=formulario_precato
PGPASSWORD=root
PGPORT=5432
PORT=3000
```
Substitua `PGUSER` e `PGPASSWORD` pelos valores de login do seu banco de dados PostgreSQL.
**OBS:** *Pode ser que seja necessario alterar mais alguma variavel de ambiente de acordo com as suas credenciais do seu banco de dados caso use alguma diferente*

6. Rode as migrations para criar as tabelas no banco de dados:
```bash
npx knex migrate:latest
```

7. Inicie o servidor:
```bash
npm start
```

O servidor por padrao irá rodar na porta 3000 a não ser que você altere a variavel de ambiente no .env . Para acessar as rotas da API, utilize o Postman ou outro programa semelhante.

## Testando o projeto

1. Certifique-se de que o servidor está sendo executado e o banco de dados está conectado.

2. Abra o Postman ou outra ferramenta similar de testes de API.
3. Adicione uma nova requisição do tipo POST para http://localhost:3000/forms
4.Na aba "Body", selecione "raw" e escolha "JSON" no dropdown ao lado.
5.Adicione um objeto JSON com as informações da inscrição, por exemplo:
```bash
{
  "name": "Fulano de Tal",
  "email": "fulano@teste.com",
  "cpf": "123.456.789-00",
  "phone": "(00) 99999-9999"
}
```
6. Envie a requisição e verifique se recebeu uma resposta com status 201 e o objeto JSON com as informações da inscrição.

7. Para buscar as inscrições realizadas dentro de um período de tempo, adicione uma nova requisição do tipo `GET` para http://localhost:3000/forms?startDate=yyyy-mm-dd&endDate=yyyy-mm-dd, substituindo as datas de início e fim do período. Certifique-se de que pelo menos uma inscrição foi realizada dentro do período especificado.
URL exemplo:
```bash
http://localhost:3000/forms?startDate=2023-01-01&endDate=2023-12-31
```

8. Envie a requisição e verifique se recebeu uma resposta com status 201 e um array JSON com as informações das inscrições realizadas dentro do período especificado.

## Tecnologias utilizadas

- Node.js
- Express
- PostgreSQL
- Knex.js
- Postman


