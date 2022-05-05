build:
	docker volume create 2022-web-welcome--node_modules
	docker-compose build

install:
	docker-compose run front_install

serve:
	docker-compose run -p 3789:3000 front_serve

down:
	docker-compose down --rmi all
