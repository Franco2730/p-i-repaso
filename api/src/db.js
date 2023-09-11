// Este archivo tendrá toda la responsabilidad de contener la configuración de la base de datos. Asi como App tiene la configuración de nuestro servidor.

//En la documentación oficial podemos ver las formas que es recomendable trabajar e instalar dependencias.

const { Sequelize } = require("sequelize"); 

const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');


module.exports = { 
    conn: sequelize, // Exportamos en forma de objeto ya que, desde este mismo archivo vamos a tener que exportar otras cosas, con lo cual, exportamos sequelize pero con la panabla conn que lo contenga, haciendo alución a CONEXIÓN.
 }

 //IMPORTANTE SABER:
 //Cuando fuimos a la documentación oficial de sequelize, vimos que tenemos que require sequelize y que luego vamos a crear una variable llamada sequelize que contiene una nueva instancia de esta con un link:

//const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');

//Ahora tenemos que reemplazar este path por lo que nosotros necesitamos, pero antes, vamos a entender que significa: 

//POSTGRES: Es el dialecto de la BD que vamos a utilizar. (en nuestro caso es postgres)
//USER: Es el usuario que va a utilizar la BD (en nuestro caso es postgres)
//PASS: Es la contraseña con la que vamos a ingresar a la BD. (en nuestro caso es postgres)
//EXAMPLE.COM (en nuestro caso es localhost)
