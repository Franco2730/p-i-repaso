const { Router } = require("express");
const { getPostHandler } = require("../handlers/postsHandler");

const postsRouter = Router(); //Crea un enrutador de Express llamado postsRouter.

postsRouter.get("/", getPostHandler); 



module.exports = postsRouter;
