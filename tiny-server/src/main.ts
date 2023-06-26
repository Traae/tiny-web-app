import express from 'express';
import bodyparser from 'body-parser';
import { MongoClient } from 'mongodb';
import { AddressInfo } from 'net';

const app = express();

app.use((_, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE, PATCH');
    next();
});
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use((req, _res, next) => {
    console.info(req.method, req.path);
    next();
});

const mongoDBAddress = process.env.MONGODB_URI || 'mongodb://localhost:27017';
MongoClient.connect(mongoDBAddress).then(mongoClient => {
    // ***SET UP DB***
    console.log(`Connected to MongoDB at address: ${mongoDBAddress}`);
    const db = mongoClient.db('teamups-exercise');
    const port = process.env.SERVER_PORT || 8080;

    // ***START SERVER***
    const server = app.listen(port, () => {
        const serverAddress = server.address() as AddressInfo;
        console.log(`Server running on port: ${serverAddress.port}`);
    });

    // ***API: PING***
    app.get('/api/ping', (_, res) => {
        // EXCERCISE: Update response shape
        res.send('pong');
    });
}).catch(err => {
    console.error('Unable to connect to MongoDB.', err);
    process.exit(1);
});