const express = require("express");
const app = express();

app.get("/visita", (req, res) => {
  console.log("📢 Alguém entrou no site!", new Date().toLocaleString());
  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
