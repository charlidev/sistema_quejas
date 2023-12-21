import express from "express";

//Arreglo para __dirname
import path from 'path';
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

//SERVER
const app = express();
app.set("port",4000);
app.listen(app.get("port"));
console.log("Servidor levantado en puerto",app.get("port"));

//Configuración
app.use(express.static(__dirname + "/public"));

//RUTAS
app.get("/",(req,res)=> res.sendFile(__dirname + "/pages/login.html"))
app.get("/register",(req,res)=> res.sendFile(__dirname + "/pages/register.html"))