FROM ruby:3.1.2

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs
RUN mkdir /app

WORKDIR /app

COPY . /app

RUN bundle install
