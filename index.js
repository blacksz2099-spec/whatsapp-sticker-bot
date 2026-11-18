
const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bot de Stickers está funcionando!");
});

app.get("/health", (req, res) => {
  res.json({
    status: "online",
    bot: "WhatsApp Sticker Bot"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
