FROM node:21-alpine3.18 as base

WORKDIR /app
COPY package*.json ./
RUN npm install

FROM base as runner

COPY . .

EXPOSE 3000

RUN npm run build

CMD ["npm", "start"]


