// Este archivo tendrá toda la responsabilidad de contener la configuración de la base de datos. Asi como App tiene la configuración de nuestro servidor.

//En la documentación oficial podemos ver las formas que es recomendable trabajar e instalar dependencias.

const { Sequelize } = require("sequelize"); 

const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');


module.exports = { 
    conn: sequelize, 
 }





