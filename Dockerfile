FROM node:14.17.6-alpine3.13
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY . .
COPY .env .
EXPOSE 3000
RUN npm start