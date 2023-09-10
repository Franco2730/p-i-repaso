const { Router } = require("express");
// const { getPostHandler } = require("../handlers/postsHandler.js");

const postsRouter = Router();

postsRouter.get("/posts", (req, res) => {
    res.status(200).send("Posts Okey Makey");
});



// postsRouter.get("/", getPostHandler);


module.exports = postsRouter;
