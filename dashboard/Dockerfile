FROM node

ENV PORT 3000
EXPOSE 3000

COPY . /app
WORKDIR /app

RUN npm purge && npm i

CMD npm run
