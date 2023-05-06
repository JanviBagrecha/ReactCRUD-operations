import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import connection from './database/db.js';
import Routes from './routes/route.js';
import bodyParser from 'body-parser';

const app = express();  //initialising express as an function

//initializing dotenv using config function
dotenv.config();

app.use(bodyParser.json({ extended:true }));
app.use(bodyParser.urlencoded({ extended:true }));

//enabling cors through express
app.use(cors());

//through express we are taking the function
app.use('/', Routes);    //passing default endpoint

const PORT = 8000;

//process.env is used to get anything from .env file
const username= process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;

//calling connection() with url passing parameters
connection(username,password);

app.listen(PORT, () => console.log(`Server is running succesfully on PORT ${PORT}`)); //nack tick `` is required to use ${<variable}
//to create express server listen() function is used
//listen() - takes two arguments 1)PORT to open server 2)call back function
