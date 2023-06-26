# A tiny web app

## Intro
Built with React (CRA), Node.js w/ TypeScript, and MongoDB.

## Quick Start
#### [1] Run MongoDB

You can run MongoDB using a number of options, including:
1. Run locally as outlined in the [official docs](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/#run-mongodb-community-edition)
1. Run via docker
1. Use a MongoDB Atlas instance
1. Whichever other option you might prefer

The server uses either the `MONGODB_URI` env variable, or defaults to `mongodb://localhost:27017`. If you use any other option aside from #1, make sure to update the server as needed.

#### [2] Run server
```
// open a terminal window
// start server
cd path/to/tiny-server/
npm install
npm run
```
Server is running as expected if you see logs for connecting to MongoDB and running on port. You can make a GET request to `localhost:8080/api/ping` to verify a response.

#### [3] Run client
```
// open another terminal window
// start client
cd path/to/tiny-client/
npm install
npm run
```
Client is running as expected if the app opens and you see "pong" in the console.
