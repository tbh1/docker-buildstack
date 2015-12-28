FROM node

ENV PORT 3000
EXPOSE 3000

COPY . /app
WORKDIR /app

RUN npm prune && npm i

CMD npm start
