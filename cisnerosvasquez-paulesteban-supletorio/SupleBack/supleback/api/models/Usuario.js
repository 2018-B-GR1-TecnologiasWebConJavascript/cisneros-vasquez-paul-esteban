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
      required: true,
        regex: /^[a-zA-Z ]*$/
    },
    correo: {
      type: 'string',
      required: true,
      isEmail: true
    },
    password: {
      type: 'string',
      required: true,
     // regex: /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,15})$/
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
    }
    ,
    actores: {
        collection: 'Actor', // Modelo Hijo
        via: 'usuario' // Nombre del Campo
    },


  },

};

