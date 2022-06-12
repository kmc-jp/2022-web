setup:
	docker volume create 2022-web-section-05-front--node_modules

up:
	docker-compose up --build -d

down:
	docker-compose down --rmi all

front-attach:
	docker exec -it 2022-web-section-05-front /bin/bash
