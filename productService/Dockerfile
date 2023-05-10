FROM node:lts-alpine

WORKDIR /src/index

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000

RUN npm install --save-dev typescript

RUN npm run build

CMD [ "node", "dist/index.js" ]