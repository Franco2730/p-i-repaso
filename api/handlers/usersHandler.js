//Query ---> http://localhost:3001/users?nombre=Franco&apellido=Rosales (este nombre viene por query, si quisieramos mas datos, los separamos por ampersan) la sintaxis se identifica porque cuando comienza con signo de pregunta es por query.
const getUserHandler = (req, res) => {

    const { name, lastname } = req.query;

    //A continuacion vamos a hacer un condicional para comprobar si hemos recibido un name o un lastname, en el caso de que sea así, le enviaremos un status con un mensaje, y si no, otro status y otro mensaje.
    if( name || lastname ) {
        return res
        .status(200)
        .send(
            `Encontramos el usuario con el nombre de: ${name} ${lastname}`
            );
    }
    res.status(200).send("Todos los usuarios.");
};


//Por Params --> /:id (por llevar la info despues de los dos puntos.)
const getUserIdHandler = (req, res) => {
    const { id } = req.params;
    res.status(200).send(`Encontramos el usuario con el id: ${id}`);
};


//Por body --> 
const createUserHandler = (req, res) => {
    const { nombre, email, telefono } = req.body;
    res
    .status(200)
    .send(
        `Creamos el usuario con el nombre: ${nombre} correo electronico: ${email} y telefono: ${telefono}`
        )
};




module.exports = {
    getUserHandler,
    getUserIdHandler,
    createUserHandler
}
