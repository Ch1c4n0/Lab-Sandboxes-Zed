// Servidor web simples usando só o módulo "http" que já vem no Node.js
const http = require("http");

const PORT = process.env.PORT || 3000;

// HTML da página principal
const page = `<!doctype html>
<html lang="pt-BR">
<head><meta charset="utf-8"><title>Painel do Capitão</title>
<style>body{font-family:sans-serif;background:#0b1220;color:#e6ecf5;
display:grid;place-items:center;height:100vh;margin:0}</style></head>
<body><div>
  <h1>🐳 Painel do Capitão</h1>
  <p>Rodando dentro de um Docker Sandbox, editado pelo Zed.</p>
</div></body></html>`;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    return res.end(page);
  }
  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ erro: "rota não encontrada" }));
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Painel do Capitão ouvindo na porta ${PORT}`);
});
