FROM node:argon

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
COPY webpack.production.config.js /usr/src/app/
RUN npm install
RUN npm run build

COPY . /usr/src/app

EXPOSE 8080 

CMD [ "npm", "run","server"]
