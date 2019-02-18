/**
 * FacturaDetalle.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    cantidad: {
      type: 'number',
      required: true
    },
    precio: {
      type: 'number',
      required: true
    },
    total: {
      type: 'number',
      required: true,
    },

    idFacturaCabecera:{
      model: 'FacturaCabecera'
    },

    idpelicula:{
      model: 'EventosPorPelicula'
    }


  },

};
