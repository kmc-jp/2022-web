FROM alpine:3.16.0

RUN apk add bash

ARG USERNAME=2022WEB

WORKDIR /home/$USERNAME/2022-web/docker-setup/

COPY . .

RUN chmod u+x /home/$USERNAME/2022-web/docker-setup/docker-check.sh

CMD ["sleep", "infinity"]
