/**
 * EventosPorMedicamento.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    idPelicula: {
      model: 'Pelicula'
    },

    preciobase:{
      columnName: 'precio_base',
      type: 'number'
    },

    detallefacturas: {
      collection: 'FacturaDetalle',
      via: 'idpelicula',
    },

    idEvento:{
      model:'Eventos'
    },


  },

};
