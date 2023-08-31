//Query ---> /?name=franco (este nombre viene por query, si quisieramos mas datos, los separamos por ampersan) la sintaxis se identifica porque cuando comienza con signo de pregunta es por query.
const getUserHandler = (req, res) => {

    const { nombre, apellido } = req.query;

    //A continuacion vamos a hacer un condicional para comprobar si hemos recibido un nombre o un apellido, en el caso de que sea así, le enviaremos un status con un mensaje, y si no, otro status y otro mensaje.
    if( nombre || apellido ) {
        return res
        .status(200)
        .send(
            `Encontramos el usuario con el nombre de: ${nombre} ${apellido}`
            );
    }
    res.status(200).send("Todos los usuarios.");
};

//Por Params --> /:id (por llevar la info despues de los dos puntos.)
const getUserIdHandler = (req, res) => {
    const { usuario } = req.params;
    const { id } = req.params;
    res.status(200).send(`Encontramos el usuario ${usuario} con el id: ${id}`);
};

const createUserHandler = (req, res) => {
    
};




module.exports = {
    getUserHandler,
    getUserIdHandler,
    createUserHandler
}
