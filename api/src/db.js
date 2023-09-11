// Este archivo tendrá toda la responsabilidad de contener la configuración de la base de datos. Asi como App tiene la configuración de nuestro servidor.

//En la documentación oficial podemos ver las formas que es recomendable trabajar e instalar dependencias.

const { Sequelize } = require("sequelize"); 

const sequelize = new Sequelize(
    "repaso-pi", // Nombre de la base de datos
    "postgres", // Nombre de usuario
    "2730", // Contraseña
    {
      host: "localhost",
      port: 5432,
      dialect: "postgres",
    }
  );

module.exports = { 
    conn: sequelize, 
 }





