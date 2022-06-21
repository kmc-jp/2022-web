FROM node:17-alpine3.14

RUN mkdir /front

WORKDIR /front

COPY . .

RUN yarn install

CMD ["yarn", "run", "start"]
