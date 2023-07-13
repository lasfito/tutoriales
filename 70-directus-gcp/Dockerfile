FROM node:16-alpine

WORKDIR /src

ADD . /src

RUN npm install --production

EXPOSE 8055

CMD ["npm", "start"]
