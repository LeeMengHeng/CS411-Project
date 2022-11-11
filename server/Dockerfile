FROM ubuntu

WORKDIR /server
# COPY . .
RUN apt update
RUN apt install curl -y

## Install flask
RUN apt install pip -y \
    && pip install flask