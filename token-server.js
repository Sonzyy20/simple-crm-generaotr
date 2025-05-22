// token-server.js
const jwt = require("jsonwebtoken");
const express = require("express");
const app = express();
const port = 3000;

// Твои ключи (НЕ передавать на клиент)
const API_KEY = "973ba407255a080bad90e8234f0733c711718d1f745ced4eb7fc8eb8d48da4ee";
const API_SECRET = "1acb73dd8306bdc9e50b980baf69d1c9370b721d94f908b23fc0a1eb966eb73b";
const WORKSPACE_ID = "timajaf2005@gmail.com"; // например, demo@example.com

app.get("/token", (req, res) => {
  const payload = {
    iss: API_KEY,
    sub: WORKSPACE_ID,
    exp: Math.floor(Date.now() / 1000) + 60 // 60 секунд
  };

  const token = jwt.sign(payload, API_SECRET, { algorithm: "HS256" });
  res.json({ token });
});

app.listen(port, () => {
  console.log(`Token server running on http://localhost:${port}`);
});
