const server = require("./src/app"); //Importamos el contenido de la variable app creada en el archivo app. (La podemos renombrar debido a que, al momento de exportarla de app.js, no le aplicamos destructuring, si le hubiesemos aplicado, aca tambien lo tendriamos que hacer y con el nombre que lo exportamos anteriormente.) Como lo exportamos por default, tamos god.
const { conn } = require("./src/db");
const PORT = 3001; //Creamos la variable del primer parametro del server.listen. Se recomienda utilizar para el back el 3001 (corroborar que no este ocupado).


server.listen(PORT, ()=>{//Expres tiene un método, dicho método recibe dos parametros. El primero es un puerto (colocaremos PORT y arriba crearemos esa variable) y el segundo es una fn callback. 
    conn.sync({ force:true }); //Cuidado cuando se usa true.
    console.log(`Server listen on port ${PORT}`);
})
