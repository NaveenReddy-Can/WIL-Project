import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';

import Routes from './server/route.js';
import Connection from './database/databaseconnection.js';
//initializing express
const app = express();


dotenv.config();

// Handling the Http res and request 
// we need express.js 
// Middlle wares are required here
// the body-parser extracts the entire body portion of an incoming request stream and exposes it on req.body as declared below.
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/', Routes);
// username and
//password are declared
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
// port number for by defalut runnign 
const PORT = '8080';

Connection(USERNAME, PASSWORD);

app.listen(PORT, () => console.log(`the Server is running successfully on PORT ${PORT} currently`));