declare var require: any;
const inquirer = require('inquirer');
const fs = require('fs');
const rxjs = require('rxjs');
const mergeMap = require('rxjs/operators').mergeMap;
const map = require('rxjs/operators').map;
const find = require('rxjs/operators').find;

let abilities = ['comer','dormir'];
let held_items = ['manzanas','peras'];
let moves = ['cut','jump'];

const preguntaMenu = [

     {  type: 'input',
        name: 'nombre',
        message: 'Cual es esse pokemon?',
        default: 'Pikachu',
        validate: function (name) {
            const done = this.async();
            setTimeout(function () {
                if (typeof name !== 'string') {
                    // Pass the return value in the done callback
                    done('Ingrese un nombre completo por favor');
                    return;
                }
                // Pass the return value in the done callback
                done(null, true);
            }, 500);


        }
    },
    {
        type: 'input',
        name: 'base_experience',
        message: 'Ingrese su base_experience'
    },
    {
        type: 'input',
        name: 'game_indices',
        message: 'Ingrese su game_indices'
    },
    {
        type: 'input',
        name: 'height',
        message: 'Ingrese su height'
    },
    {
        type: 'input',
        name: 'id',
        message: 'Ingrese su id'
    },
    {
        type: 'input',
        name: 'order',
        message: 'Ingrese su order'
    },
    {
        type: 'input',
        name: 'weight',
        message: 'Ingrese su weight'
    },
    {
        type: "checkbox",
        message: "Seleccione las habilidades...",
        name: "abilities",
        choices: abilities
    },{
        type: "checkbox",
        message: "Seleccione sus held_items...",
        name: "held_items",
        choices: held_items
    },{
        type: "checkbox",
        message: "Seleccione sus moves...",
        name: "moves",
        choices: moves
    },
];


function main() {
    console.log('Empezo');

    inicializarBase()
        .pipe(
            preguntarOpcionesMenu())
        .pipe(
            map(
                (usuario: Usuario) => {
                    respuesta.usuario = usuario;
                    respuesta.bdd.usuarios.push(respuesta.usuario);
                    return respuesta;
                }
            ),
            actualizarBDD()
        )
        .subscribe(
            (respuesta) => {
                console.log(respuesta);
            },
            (error) => {
                console.log(error);
            },
            () => {
                console.log('complete');
                main();
            }
        );


}

function inicializarBase() {

    const bddLeida$ = rxjs.from(leerBDD());

    return bddLeida$
        .pipe(
            mergeMap(  // Respuesta anterior Observable
                (respuestaBDD: RespuestaLeerBDD) => {
                    if (respuestaBDD.bdd) {
                        return rxjs
                            .of(respuestaBDD);
                    } else {
                        // crear la base

                        return rxjs
                            .from(crearBDD());
                    }

                }
            ),
        );


}

function leerBDD() {
    return new Promise(
        (resolve) => {
            fs.readFile(
                'data.json',
                'utf-8',
                (error, contenidoArchivo) => {
                    if (error) {
                        resolve({
                            mensaje: 'No existe la Base de Datos',
                            bdd: null
                        });
                    } else {
                        resolve({
                            mensaje: 'Base de datos leida',
                            bdd: JSON.parse(contenidoArchivo)
                        });
                    }
                }
            );
        }
    );
}

function crearBDD() {
    const contenido = '{"usuarios":[],"Videos":[]}';
    return new Promise(
        (resolve, reject) => {
            fs.writeFile(
                'data.json',
                contenido,
                (error) => {
                    if (error) {
                        reject({
                            mensaje: 'Error creando bdd',
                            error: 500
                        });
                    } else {
                        resolve({
                            mensaje: 'BDD creada',
                            bdd: JSON.parse(contenido)
                        });
                    }
                }
            );
        }
    );
}

function guardarBDD(bdd: BaseDeDatos) {
    return new Promise(
        (resolve, reject) => {
            fs.writeFile(
                'data.json',
                JSON.stringify(bdd),
                (err) => {
                    if (err) {
                        reject({
                            mensaje: 'Error guardando la BDD',
                            error: 500
                        });
                    } else {
                        resolve({
                            mensaje: 'BDD guardada',
                            bdd
                        });
                    }
                }
            );
        }
    );
}

function preguntarOpcionesMenu() {
    return mergeMap(
        (respuesta: RespuestaLeerBDD) => {
            return rxjs
                .from(inquirer.prompt(preguntaMenu))
                .pipe(
                    map(
                        (opcionMenu: OpcionMenu) => {
                            respuesta.opcionMenu = opcionMenu;
                            return respuesta;
                        }
                    )
                )
        }
    );
}





}

function actualizarBDD() {
    return mergeMap(
        (respuesta: RespuestaLeerBDD) => {
            return rxjs.from(guardarBDD(respuesta.bdd));
        }
    );
}




function anadirUsuario(usuario) {
    return new Promise(
        (resolve, reject) => {
            fs.readFile('bdd.json', 'utf-8',
                (err, contenido) => {
                    if (err) {
                        reject({mensaje: 'Error leyendo'});
                    } else {
                        const bdd = JSON.parse(contenido);


                        bdd.usuarios.push(usuario);


                        fs.writeFile(
                            'bdd.json',
                            JSON.stringify(bdd),
                            (err) => {
                                if (err) {
                                    reject(err);
                                } else {
                                    resolve({mensaje: 'Usuario Creado'});
                                }
                            }
                        );
                    }
                });
        }
    );
}

function editarUsuario(nombre, nuevoNombre) {
    return new Promise(
        (resolve, reject) => {
            fs.readFile('bdd.json', 'utf-8',
                (err, contenido) => {
                    if (err) {
                        reject({mensaje: 'Error leyendo'});
                    } else {
                        const bdd = JSON.parse(contenido);


                        const indiceUsuario = bdd.usuarios
                            .findIndex(
                                (usuario) => {
                                    return usuario.nombre = nombre;
                                }
                            );

                        bdd.usuarios[indiceUsuario].nombre = nuevoNombre;


                        fs.writeFile(
                            'bdd.json',
                            JSON.stringify(bdd),
                            (err) => {
                                if (err) {
                                    reject(err);
                                } else {
                                    resolve({mensaje: 'Usuario Editado'});
                                }
                            }
                        );
                    }
                });
        }
    );
}

function buscarUsuarioPorNombre(nombre) {
    return new Promise(
        (resolve, reject) => {
            fs.readFile('bdd.json', 'utf-8',
                (err, contenido) => {
                    if (err) {
                        reject({mensaje: 'Error leyendo'});
                    } else {
                        const bdd = JSON.parse(contenido);

                        const respuestaFind = bdd.usuarios
                            .find(
                                (usuario) => {
                                    return usuario.nombre === nombre;
                                }
                            );

                        resolve(respuestaFind);
                    }
                });
        }
    );
}

main();


interface RespuestaLeerBDD {
    mensaje: string;
    bdd?: BaseDeDatos;
    opcionMenu?: OpcionMenu;
    usuario?: Usuario;
}

export interface BaseDeDatos {
    usuarios: Usuario[];
    mascotas: Mascota[];
}

interface Usuario {
    id: number;
    nombre?: string;
}

interface Mascota {
    id: number;
    nombre: string;
    idUsuario: number;
}

interface OpcionMenu {
    opcionMenu: '1' | '2' | '3' | '4'| '5' | '6' | '7'| '8'  | '10'| '11' | '9';
}













