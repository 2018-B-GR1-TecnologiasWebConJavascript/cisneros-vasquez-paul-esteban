/**
 * Usuario.js
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
    correo: {
      type: 'string',
      required: true
    },
    password: {
      type: 'string',
      required: true
    },
    fechanacimiento: {
      type: 'string',
      columnName: 'fecha_nacimiento',
      required: true
    }//,
    //idUsuario: {
    //model: 'RolPorUsuario' // Modelo Papa
    //}
    ,
    roles: {
      collection: 'Rol', // Modelo Hijo
      via: 'usuarios' // Nombre del Campo
    },

  },

};

