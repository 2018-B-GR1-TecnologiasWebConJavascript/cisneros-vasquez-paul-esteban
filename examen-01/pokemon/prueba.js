const inquirer = require('inquirer');
const fs = require('fs');
const rxjs = require('rxjs');
const mergeMap = require('rxjs/operators').mergeMap;
const map = require('rxjs/operators').map;
const find = require('rxjs/operators').find;
let abilities = ['comer', 'dormir'];
let held_items = ['manzanas', 'peras'];
let moves = ['cut', 'jump'];
const preguntaUsuario = [
    { type: 'input',
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
    }, {
        type: "checkbox",
        message: "Seleccione sus held_items...",
        name: "held_items",
        choices: held_items
    }, {
        type: "checkbox",
        message: "Seleccione sus moves...",
        name: "moves",
        choices: moves
    },
];
const preguntaMenu = [
    {
        type: 'input',
        name: 'OpcionMenu',
        message: 'Numero de pregunta'
    }
];
const preguntaUsuarioBuscar = [
    {
        type: 'input',
        name: 'id',
        message: 'Cual es tu id'
    }
];
const preguntaUsuarioBusquedaPorNombre = [
    {
        type: 'input',
        name: 'nombre',
        message: 'Escribe el nombre del usuario a buscar'
    }
];
const preguntaUsuarioNuevoNombre = [
    {
        type: 'input',
        name: 'nombre',
        message: 'Escribe tu nuevo nombre'
    }
];
function main() {
    console.log('Empezo');
    inicializarBase()
        .pipe(preguntarOpcionesMenu(), preguntarDatos(), actualizarBDD())
        .subscribe((respuesta) => {
        console.log(respuesta);
    }, (error) => {
        console.log(error);
    }, () => {
        console.log('complete');
        main();
    });
    // ------- 1) Si existe el archivo, leer, sino crear
    // ------- 2) Pregunto que quiere hacer -> Crear Borrar Actualizar Buscar
    // ------- 3) Preguntar los datos -> Datos nuevo Registro
    // ------- 4) Accion!
    // ------- 5) Guardar la Base de Datos
    /*
    try {
        await inicializarBase();
        const respuesta = await inquirer.prompt(preguntaMenu);
        switch (respuesta.opcionMenu) {
            case 'Crear':

                const respuestaUsuario = await inquirer.prompt(preguntaUsuario);
                await anadirUsuario(respuestaUsuario);
                main();
                break;

            case 'Actualizar':

                const respuestaUsuarioBusquedaPorNombre = await inquirer.prompt(preguntaUsuarioBusquedaPorNombre);

                const existeUsuario = await buscarUsuarioPorNombre(respuestaUsuarioBusquedaPorNombre.nombre);

                if (existeUsuario) {
                    const respuestaNuevoNombre = await inquirer.prompt(preguntaUsuarioNuevoNombre);
                    await editarUsuario(respuestaUsuarioBusquedaPorNombre.nombre, respuestaNuevoNombre.nombre);
                } else {
                    console.log('El usuario no existe');

                    main();
                    break;
                }


        }
    } catch (e) {
        console.log('Hubo un error');
    }
    */
}
function inicializarBase() {
    const bddLeida$ = rxjs.from(leerBDD());
    return bddLeida$
        .pipe(mergeMap(// Respuesta anterior Observable
    (respuestaBDD) => {
        if (respuestaBDD.bdd) {
            return rxjs
                .of(respuestaBDD);
        }
        else {
            // crear la base
            return rxjs
                .from(crearBDD());
        }
    }));
    /*
    return new Promise(
        (resolve, reject) => {

            // CALLBACK HELL !!!

            fs.readFile('bdd.json', 'utf-8',
                (err, contenido) => {
                    if (err) {
                        fs.writeFile('bdd.json',
                            '{"usuarios":[],"mascotas":[]}',
                            (err) => {
                                if (err) {
                                    reject({mensaje: 'Error'});
                                }
                                resolve({mensaje: 'ok'});
                            });
                    } else {
                        resolve({mensaje: 'ok'});
                    }
                });
        }
    );
    */
}
function leerBDD() {
    return new Promise((resolve) => {
        fs.readFile('Stream.json', 'utf-8', (error, contenidoArchivo) => {
            if (error) {
                resolve({
                    mensaje: 'No existe la Base de Datos',
                    bdd: null
                });
            }
            else {
                resolve({
                    mensaje: 'Base de datos leida',
                    bdd: JSON.parse(contenidoArchivo)
                });
            }
        });
    });
}
function crearBDD() {
    const contenido = '{"usuarios":[],"Videos":[]}';
    return new Promise((resolve, reject) => {
        fs.writeFile('Stream.json', contenido, (error) => {
            if (error) {
                reject({
                    mensaje: 'Error creando bdd',
                    error: 500
                });
            }
            else {
                resolve({
                    mensaje: 'BDD creada',
                    bdd: JSON.parse(contenido)
                });
            }
        });
    });
}
function guardarBDD(bdd) {
    return new Promise((resolve, reject) => {
        fs.writeFile('Stream.json', JSON.stringify(bdd), (err) => {
            if (err) {
                reject({
                    mensaje: 'Error guardando la BDD',
                    error: 500
                });
            }
            else {
                resolve({
                    mensaje: 'BDD guardada',
                    bdd
                });
            }
        });
    });
}
function preguntarOpcionesMenu() {
    return mergeMap((respuesta) => {
        return rxjs
            .from(inquirer.prompt(preguntaMenu))
            .pipe(map((opcionMenu) => {
            respuesta.opcionMenu = opcionMenu;
            return respuesta;
        }));
    });
}
function preguntarDatos() {
    return mergeMap((respuesta) => {
        switch (respuesta.opcionMenu.opcionMenu) {
            case '11':
                return rxjs
                    .from(inquirer.prompt(preguntaUsuario))
                    .pipe(map((usuario) => {
                    respuesta.usuario = usuario;
                    respuesta.bdd.usuarios.push(respuesta.usuario);
                    return respuesta;
                }));
        }
    });
}
function actualizarBDD() {
    return mergeMap((respuesta) => {
        return rxjs.from(guardarBDD(respuesta.bdd));
    });
}
function anadirUsuario(usuario) {
    return new Promise((resolve, reject) => {
        fs.readFile('bdd.json', 'utf-8', (err, contenido) => {
            if (err) {
                reject({ mensaje: 'Error leyendo' });
            }
            else {
                const bdd = JSON.parse(contenido);
                bdd.usuarios.push(usuario);
                fs.writeFile('bdd.json', JSON.stringify(bdd), (err) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve({ mensaje: 'Usuario Creado' });
                    }
                });
            }
        });
    });
}
function editarUsuario(nombre, nuevoNombre) {
    return new Promise((resolve, reject) => {
        fs.readFile('bdd.json', 'utf-8', (err, contenido) => {
            if (err) {
                reject({ mensaje: 'Error leyendo' });
            }
            else {
                const bdd = JSON.parse(contenido);
                const indiceUsuario = bdd.usuarios
                    .findIndex((usuario) => {
                    return usuario.nombre = nombre;
                });
                bdd.usuarios[indiceUsuario].nombre = nuevoNombre;
                fs.writeFile('bdd.json', JSON.stringify(bdd), (err) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve({ mensaje: 'Usuario Editado' });
                    }
                });
            }
        });
    });
}
function buscarUsuarioPorNombre(nombre) {
    return new Promise((resolve, reject) => {
        fs.readFile('bdd.json', 'utf-8', (err, contenido) => {
            if (err) {
                reject({ mensaje: 'Error leyendo' });
            }
            else {
                const bdd = JSON.parse(contenido);
                const respuestaFind = bdd.usuarios
                    .find((usuario) => {
                    return usuario.nombre === nombre;
                });
                resolve(respuestaFind);
            }
        });
    });
}
main();
