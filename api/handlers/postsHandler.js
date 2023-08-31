const getPostHandler = (req, res) => {
    res.status(200).send("Todos los posts");
};

module.exports = getPostHandler;