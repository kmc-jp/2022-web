FROM ruby:3.1.2

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs
RUN mkdir /app

ADD ./section-06-app/Gemfile /app/Gemfile
ADD ./section-06-app/Gemfile.lock /app/Gemfile.lock

WORKDIR /app/section-06-app

RUN bundle install

ADD ./section-06-app /app
