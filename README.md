# react-express-mongo-todo-app

This is a simple to-do app that is created using React + Redux, and Express + MongoDB inside Docker containers.


## Prerequisities

#### Docker

* [Windows](https://docs.docker.com/windows/started)
* [OS X](https://docs.docker.com/mac/started/)
* [Linux](https://docs.docker.com/linux/started/)

#### Docker Compose
Follow these [instructions to install Compose](https://docs.docker.com/compose/install/) on Mac, Windows, Windows Server, or Linux systems.

#### MongoDB

1. [Create MongoDB Account](https://www.mongodb.com/docs/guides/cloud/account/).
2. [Create Database](https://www.mongodb.com/basics/create-database).

## Usage
1. In docker-compose.yml, provide the required values for the MongoDB Connection:
```yaml
version: '3.8'
services:
  API:
    ...
    environment:
      DB_CONNECTION: mongodb+srv://*****.mongodb.net/ # MongoDB Connection
      DB_NAME: xxxx                                   # Database Name
      DB_COLLECTION: todo                             # Collection Name
      DB_SEED: 'true'                                 # If the collection should be seeded.
     ...
```
2. Build and run the app
``` bash
$ docker-compose up
```
3. Open the browser in `http://localhost:3001`

## Libraries
* [React](https://github.com/facebook/react)
* [Redux](https://github.com/reduxjs/redux)
* [Redux Toolkit](https://github.com/reduxjs/redux-toolkit)
* [Express](https://github.com/expressjs/express)
* [MongoDB NodeJS Driver](https://github.com/mongodb/node-mongodb-native)
* [Vite](https://github.com/vitejs/vite)
* [MUI](https://github.com/mui/material-ui)
* [day.js](https://github.com/iamkun/dayjs)
* [uuidjs](https://github.com/uuidjs/uuid)



## License
This is [MIT licensed](https://github.com/lowlle/react-express-mongo-todo-app/blob/975af376e9a3b431a3386aff4213880cb67ed0e8/LICENSE)