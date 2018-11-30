const inquirer = require('inquirer');
const fs = require('fs');
///////////////////////////////////////////////////////////////EJERCICIO 1
function Btypes() {
    return new Promise((resolve, reject) => {
        fs.readFile('data.json', 'utf-8', (err, contenido) => {
            if (err) {
                reject({ mensaje: 'Error archivo' });
            }
            else {
                const bdd = JSON.parse(contenido);
                const respuestaFind = bdd.pokemon
                    .map((pokemon) => {
                    return pokemon.type;
                });
                resolve(respuestaFind);
            }
        });
    });
}
