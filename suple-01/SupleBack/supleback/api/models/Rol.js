/**
 * Rol.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre: {
      type: 'string',
      required: true
    },
    //idRol: {
    // model: 'RolPorUsuario' // Modelo Papa
    // },
    usuarios: {
      collection: 'Usuario', // Modelo Hijo
      via: 'roles' // Nombre del Campo
    },

  },

};




