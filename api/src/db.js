// Este archivo tendrá toda la responsabilidad de contener la configuración de la base de datos. Asi como App tiene la configuración de nuestro servidor.

//En la documentación oficial podemos ver las formas que es recomendable trabajar e instalar dependencias.

const { Sequelize } = require("sequelize"); 

//Requerimos a dotenv:
require("dotenv").config();

//Desestructuramos las variables:
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME, DB_DIALECT } = process.env;

//Reemplazamos el path con las variables que contienen nuestras credenciales. 
const sequelize = new Sequelize(
    `${DB_DIALECT}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`
);

module.exports = { 
    conn: sequelize, 
 }





