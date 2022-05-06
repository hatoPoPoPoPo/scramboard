FROM ruby:2.7.3

RUN adduser app -u ${UID:-1000} && \
    apt-get update -qq && apt-get install -y nodejs postgresql-client yarn && \
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN gem install bundler
RUN chown -R app:app /usr/local/bundle

WORKDIR /api
RUN chown -R app:app /api

COPY --chown=app:app . /api

RUN bundle install

USER app
EXPOSE 3000

CMD ["sh", "-c", "bundle install --jobs=4 && bundle exec rails s -b 0.0.0.0"]
