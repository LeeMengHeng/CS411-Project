FROM ubuntu

WORKDIR /client
# COPY . .
RUN apt update
RUN apt install curl -y

## Install Node
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash - \
    && apt install nodejs -y