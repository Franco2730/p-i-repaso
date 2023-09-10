//APP SERÁ NUESTRO SERVIDOR.

const express = require("express"); //Vamos a traernos a express, lo requerimos.

const mainRouter = require("../routes/mainRouter"); //Requerimos a mainRouter para poder utilizar las rutas realizadas en dicho archivo. Si no requerimos este archivo, no habra redireccionamiento. Y tambien debemos crear un ("app.use(mainRouter)") mas abajo, para que todo funcione.
const postsRouter = require("../routes/postsRouter");
const morgan = require("morgan"); //Configuramos morgan. Recordando que morgan es un Middleware y tiene la capacidad de, ademas de imprimir los movimientos del server en consola, el middleware es un puente, un intermediario, un mediador de cuando recibimos la request.

const app = express(); //Vamos a crear una variable donde vamos a ejecutar express para tener todos sus beneficios y métodos..


app.use(morgan("dev")); //Usamos el metodo use que nos brinda express para decirle a app (expres) que USE a morgan y le indicamos que será utilizado en dev, esto quiere decir que será utilizado en develoment y no en producción. Esto nos permitirá ver en consola mas a detalle, los detalles de dicha consulta.


app.use(express.json())//Esto es para que pueda entender y desestructurar el objeto JSON y pueda parsear y reconocer esto..

app.use(mainRouter); //Le decimos al archivo app.js que tambien vamos a utilizar a mainRouter.
app.use(postsRouter);

module.exports = app;//Vamos a exportar app, en el archivo index, la vamos a requerir en una variable con el nombre de server.

