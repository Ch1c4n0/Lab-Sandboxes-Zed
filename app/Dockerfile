# Imagem oficial e leve do Node.js
FROM node:22-alpine

# Pasta de trabalho dentro do container
WORKDIR /app

# Copia os arquivos do projeto
COPY package.json server.js ./

# Roda como usuário sem privilégios (boa prática de segurança)
USER node

EXPOSE 3000
CMD ["npm", "start"]
