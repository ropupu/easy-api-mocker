FROM node:10-slim

RUN npm install -g typescript ts-node

WORKDIR /server

COPY ./application /server
RUN npm install

ENV NODE_PATH "/usr/local/lib/node_modules"

EXPOSE 3000
CMD ["npm", "start"]