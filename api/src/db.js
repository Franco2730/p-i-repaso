const { Sequelize } = require("sequelize");

//Requerimos el archivo .env de la sig. forma.
require("dotenv").config();

//Al requerir a .env tenemos que, a continuación, desestructurar las variables que vamos a necesitar.
const{

    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_PORT,
    DB_NAME,
    DB_DIALECT

} = process.env; //process es un archivo de node, es un objeto gigante gigante. 

//El siguiente ejemplo es una de las opciones que propone sequelize: y por debajo esta todo como va a quedar, todo reemplazado.
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname')

const sequelize = new Sequelize(`${DB_DIALECT}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, { logging: false 

   }
);

module.exports = {
    conn: sequelize,
}