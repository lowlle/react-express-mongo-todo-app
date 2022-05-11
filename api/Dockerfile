FROM node:16.3.0-alpine

WORKDIR /srv/
COPY package*.json /srv/

RUN npm install

COPY . /srv/

ENV PORT 6543

EXPOSE ${PORT}
CMD [ "sh", "start.sh" ]