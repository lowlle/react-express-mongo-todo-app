FROM node:16.3.0-alpine as web

WORKDIR /srv/
COPY package*.json /srv/

RUN npm install

ARG API_URL
ENV REACT_APP_API_URL=${API_URL}

COPY . /srv/

RUN REACT_APP_API_URL=${API_URL} \
    npm run build

# ENV PORT 3000
# EXPOSE ${PORT}
# CMD [ "vite", "preview", "--port=3000" ]

FROM nginx:stable-alpine AS nginx
COPY --from=web /srv/dist/ /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;" ]