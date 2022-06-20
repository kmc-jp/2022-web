prepare:
	docker volume create section-06-app-front__node_modules
	docker network create section-06-app-network

setup:
	docker-compose up --build

setup-no-build:
	docker-compose up

up:
	docker-compose run app rails db:create
	docker-compose run app rails db:migrate

down:
	docker-compose down --remove-orphans

cmd:
#	docker-compose run app rails g scaffold Users userId:string email:string password:string
# docker-compose run app rails generate migration add_index_to_Users_userId
	docker-compose run app rails generate migration add_unique_constraint_to_Users
