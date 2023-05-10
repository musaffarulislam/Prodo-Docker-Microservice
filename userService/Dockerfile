FROM node:lts-alpine

WORKDIR /src/index

COPY package*.json ./

RUN npm install

RUN npm ci --only=production

COPY . .

EXPOSE 3000

RUN npm install --save-dev @types/express @types/morgan

RUN npm run build

CMD [ "node", "dist/index.js" ]