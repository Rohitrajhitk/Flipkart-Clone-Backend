import express from "express";
import  connection  from "./database/db.js";
import DefaultData from './default.js';
import dotenv from "dotenv";
import Router from "./routers/route.js";
import cors from 'cors';
import bodyParser  from 'body-parser';

const app = express();

dotenv.config();

app.use(cors());
app.use(bodyParser.json({extended : true}));
app.use(bodyParser.urlencoded({extended : true}));
app.use("/",Router);

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

connection(USERNAME,PASSWORD);
app.listen(7000, function () {
  console.log("Server started at port 7000");
});
DefaultData();