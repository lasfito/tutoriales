# 100% seguro de que hay una mejor imagen para usar. Esta es solo una prueba de concepto.
FROM ubuntu:focal

RUN apt-get update
# para prisma y llamado node
RUN apt-get install -y openssl curl
# instalar node
RUN curl -sL https://deb.nodesource.com/setup_14.x -o nodesource_setup.sh
RUN bash nodesource_setup.sh
RUN apt-get install -y nodejs
# instalar deps prisma (?)
RUN apt-get install -y libnss3

ARG DATABASE_URL=$DATABASE_URL

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .
# nitamos inicializar prisma
RUN npx prisma generate

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]