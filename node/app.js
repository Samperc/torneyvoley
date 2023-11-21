import express from "express";
import  pool from "./database/db.js";
import cors from "cors"
const app= express();


import router from './routes/routes.js';

//middleware
//recibe info del cliente en formato json y lo convierte a un objeto js

app.use(express.json());

app.use(express.urlencoded({extended:false}))

app.use(cors())

app.use('/',router);


app.listen(8000,()=>{
    console.log('server on port 8080')
});


