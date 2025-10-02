FROM node:18-alpine

WORKDIR /pilion/api

COPY . .

RUN npm install express
RUN npm install cors

EXPOSE 8200

CMD ["node", "server.js"]
