setup:
	docker volume create 2022-web-section-04-front--node_modules

up:
	docker-compose up --build -d

down:
	docker-compose down --rmi all

front-attach:
	docker exec -it 2022-web-section-04-front /bin/bash
