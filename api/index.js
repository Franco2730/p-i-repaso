//Importamos el contenido de la variable app creada en el archivo app. (La podemos renombrar debido a que, al momento de exportarla de app.js, NO le aplicamos destructuring, si le hubiesemos aplicado, aca tambien lo tendriamos que hacer y con el nombre que lo exportamos anteriormente.) Como lo exportamos por default, tamos god:
const server = require("./src/app"); 

//Requerimos la conexión creada en db.js:
const { conn } = require ("./src/db"); 

//Creamos la variable del primer parametro del server.listen. Se recomienda utilizar para el back el 3001 (corroborar que no este ocupado):
const PORT = 3001; 


//Expres tiene un método, dicho método recibe dos parametros. El primero es un puerto (colocaremos PORT y arriba crearemos esa variable) y el segundo es una fn callback:
server.listen(PORT, ()=>{
    
    conn.sync({ alter: true });
    console.log(`Server listen on port ${PORT}`);
});
