setup:
	docker volume create 2022-web-section-07-front--node_modules

up:
	docker-compose up --build -d

down:
	docker-compose down --rmi all

front-attach:
	docker exec -it 2022-web-section-07-front /bin/bash
