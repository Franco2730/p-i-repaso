const { Router } = require("express");
const { getPostHandler } = require("../handlers/postsHandler.js");

const postsRouter = Router();

postsRouter.get("/posts", getPostHandler);



// postsRouter.get("/", getPostHandler);


module.exports = postsRouter;
