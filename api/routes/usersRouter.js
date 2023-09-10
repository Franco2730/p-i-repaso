const { Router } = require("express");
const { getUserHandler, getUserIdHandler, createUserHandler } = require("../handlers/usersHandler"); //Acá estamos requiriendo a los manejadores (handlers) para usarlos luego cuando queremos hacer algo cuando se matchee con el path detallado.

const usersRouter = Router();

usersRouter.get("/", getUserHandler) //Cuando haya un match con "/users" (recordar que la ruta esta en main, aca le borramos el users porque si no sería redundante y habria que poner en postman users/users)
 
usersRouter.get("/:id", getUserIdHandler)

usersRouter.post("/", createUserHandler)

//Sintaxis vieja de rutas: (sintaxis sin handler)

// usersRouter.get("/", (req, res) => { //Una prueba de ruta. Cuando es por Query, no hace falta especificar que le vamos a pasar algo por la url. Cuando es por params (:id) si es necesario. 
//     res.status(200).send("Se que oyes mis pensamientos muchacho");
// }); 
//--------------------


//usersRouter.get("/:usuario/:id", (req, res) => { //Cuando en la ruta le colocamos dos puntos seguido de algo mas, le estamos diciendo que va a recibir algo por params, en este ejemplo, estamos diciendo que va a recibir dos parametros con los nombres usuario e id (se pueden llamar pepito y pepita pero es mala practica)
    //     const { id } = req.params; //Aca tendramos que desestructurar como pepito o pepita de haber elegido ese erroneo camino.
    //     const { usuario } = req.params;
    //     res.status(200).send(`El usuario: ${usuario} con el id: ${id}`)
    // })
//-------------------


//La siguiente ruta es una mala practica por completo, ya que estamos manejando datos y resultados como si fuera una ruta tipo get pero estamos colocando post. Esto se solucionará con el handler.
// usersRouter.post("/", (req, res) => {
//     res.status(200).send("Usuario creado correctamente");
// })


//Las rutas cuando aplicamos la modularización y reemplazamos "La logica" con el handler. 

// usersRouter.get("/", getUserHandler); 

// usersRouter.get("/:id", getUserIdHandler);

// usersRouter.post("/", createUserHandler);


module.exports = usersRouter;
