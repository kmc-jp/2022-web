FROM node:17-alpine3.14

RUN apk add bash

WORKDIR /home/2022-web/front

COPY . .

RUN chmod u+x ./front/docker_scripts/install/script.sh

CMD ["./docker_scripts/install/script.sh"]
