const express = require('express');
const app = express();
const formsRouter = require('./routes/forms');
// Se nao for definido uma porta na .env por padrao irá rodar na porta 3000
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/forms', formsRouter);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port} para acessar diretamente http://localhost:${port}/forms`);
});