const { Router } = require("express");

const postsRouter = Router();

postsRouter.get("/", (req, res) => {
    res.status(201).send("Posts Ok.");
})


module.exports = postsRouter;
