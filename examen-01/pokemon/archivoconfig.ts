const inquirer = require ('inquirer');
const fs = require('fs');




function busquedaTypes() {
    return new Promise(
        (resolve, reject) => {
            fs.readFile('data.json', 'utf-8',
                (err, contenido) => {
                    if (err) {
                        reject({mensaje: 'Error leyendo'});
                    } else {
                        const bdd = JSON.parse(contenido);
                        const respuestaFind = bdd.pokemon
                            .map(
                                (poke)=>{
                                    return  poke.types;
                                }
                            )

                        resolve(respuestaFind);
                    }
                });
        }ng serve
    );
}

busquedaTypes()
    .then(
        (contenidoArchivo)=>{
            console.log('Los Types',contenidoArchivo);
        }
    )
    .catch(
        (resultadoError)=>{
            console.log('Algo malo paso',resultadoError);
        }
    );

function busquedaability() {
    return new Promise(
        (resolve, reject) => {
            fs.readFile('data.json', 'utf-8',
                (err, contenido) => {
                    if (err) {
                        reject({mensaje: 'Error leyendo'});
                    } else {
                        const bdd = JSON.parse(contenido);
                        const respuestaFind = bdd.pokemon
                            .map(
                                (poke)=>{
                                    return  poke.abilities;
                                }
                            )

                        resolve(respuestaFind);
                    }
                });
        }
    );
}

busquedaability()
    .then(
        (contenidoArchivo)=>{
            console.log('Los abilities',contenidoArchivo);
        }
    )
    .catch(
        (resultadoError)=>{
            console.log('Algo malo paso',resultadoError);
        }
    );

busquedaTypes()
    .then(
        (contenidoArchivo)=>{
            console.log('Los Types',contenidoArchivo);
        }
    )
    .catch(
        (resultadoError)=>{
            console.log('Algo malo paso',resultadoError);
        }
    )

function busquedamove() {
    return new Promise(
        (resolve, reject) => {
            fs.readFile('data.json', 'utf-8',
                (err, contenido) => {
                    if (err) {
                        reject({mensaje: 'Error leyendo'});
                    } else {
                        const bdd = JSON.parse(contenido);
                        const respuestaFind = bdd.pokemon
                            .map(
                                (poke)=>{
                                    return  poke.move;
                                }
                            )

                        resolve(respuestaFind);
                    }
                });
        }
    );
}

busquedamove()
    .then(
        (contenidoArchivo)=>{
            console.log('Los move',contenidoArchivo);
        }
    )
    .catch(
        (resultadoError)=>{
            console.log('Algo malo paso',resultadoError);
        }
    );

function ClasifiqueTypes() {
    return new Promise(
        (resolve, reject) => {
            fs.readFile('data.json', 'utf-8',
                (err, contenido) => {
                    if (err) {
                        reject({mensaje: 'Error leyendo'});
                    } else {
                        const bdd = JSON.parse(contenido);
                        const respuestaFind = bdd.pokemon
                            .filter(
                                (poke)=>{

                                    return  poke.types;
                                }
                            )

                        resolve(respuestaFind);
                    }
                });
        }
    );
}

ClasifiqueTypes()
    .then(
        (contenidoArchivo)=>{
            console.log('Los Types',contenidoArchivo);
        }
    )
    .catch(
        (resultadoError)=>{
            console.log('Algo malo paso',resultadoError);
        }
    );
