# stage 1
FROM node:12-alpine as builder

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

RUN apk --no-cache add python make g++

COPY package*.json ./
RUN npm install

# stage 2
FROM node:12-alpine

WORKDIR /usr/src/app
COPY --from=builder node_modules node_modules

COPY . .

CMD ["npm", "run", "start:prod"]
