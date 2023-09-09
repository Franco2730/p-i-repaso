const { Router } = require("express"); //Para no requerir express, osea, toda la libreria sus metodos, aplicamos un destructuring y nos traemos solo al metodo para hacer rutas. (router)

const mainRouter = Router();

mainRouter.get("/users", (req, res) => {
    res.status(200).send("Paraaaaaaaaaaaa, esta todo ok");
})

mainRouter.get("/users/:id", (req, res) => {
    console.log("Por PARAMS PAPA !!!!", req.params);
    const { id } = req.params;
    res.status(200).send(`Usuario con el id: ${id}`)
})

mainRouter.post("/users", (req, res) => {
    res.status(201).send("Usuario creado correctamente");
})






module.exports = mainRouter;

// const usersRouter = require("./usersRouter");










// const postsRouter = require("./postsRouter");






// //En las siguientes dos lineas le estamos diciendo que: cuando matcheen con bara users usen las rutas que creamos en usersRouter y lo mismo en posts: Cuando matcheen con barra posts utilicen las rutas que creamos en postsRouter
// mainRouter.use("/users", usersRouter);
// mainRouter.use("/posts", postsRouter);

