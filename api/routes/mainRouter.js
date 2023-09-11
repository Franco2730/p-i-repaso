const { Router } = require("express"); //Para no requerir express, osea, toda la libreria sus metodos, aplicamos un destructuring y nos traemos solo al metodo para hacer rutas. (router)
const usersRouter = require("./usersRouter");
const postsRouter = require("./postsRouter");

const mainRouter = Router();

mainRouter.use("/users", usersRouter);//Cuando el usuario matchee con "/users" vamos a utilizar las rutas que creamos en usersRouter.
mainRouter.use("/posts", postsRouter);//Cuando el usuario matchee con "/posts" vamos a utilizar las rutas que creamos en postsRouter.


module.exports = mainRouter;





// const usersRouter = require("./usersRouter");


// const postsRouter = require("./postsRouter");


// //En las siguientes dos lineas le estamos diciendo que: cuando matcheen con bara users usen las rutas que creamos en usersRouter y lo mismo en posts: Cuando matcheen con barra posts utilicen las rutas que creamos en postsRouter
// mainRouter.use("/users", usersRouter);
// mainRouter.use("/posts", postsRouter);

