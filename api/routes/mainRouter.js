const { Router } = require("express");
const usersRouter = require("./usersRouter");
const postsRouter = require("./postsRouter");

const mainRouter = Router();

//En las siguientes dos lineas le estamos diciendo que: cuando matcheen con bara users usen las rutas que creamos en usersRouter y lo mismo en posts: Cuando matcheen con barra posts utilicen las rutas que creamos en postsRouter
mainRouter.use("/users", usersRouter);
mainRouter.use("/posts", postsRouter);


module.exports = mainRouter;