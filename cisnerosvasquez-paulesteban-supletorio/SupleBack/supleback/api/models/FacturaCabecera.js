/**
* FacturaCabecera.js
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
    cedula: {
      type: 'number',
      required: true
    },
    telefono: {
      type: 'number',
      required: true
    },
    direccion: {
      type: 'string',
      required: true
    },
    correo: {
      type: 'string',
      required: true,
      isEmail: true
    },
    fecha: {
      type: 'string',
      },

    total:{
      type: 'number',

    },
    tipoPago:{
      type: 'string',
      isIn: [
        'Efectivo',
        'Tarjeta',
        'Cheque'
      ],
      defaultsTo: 'Efectivo'
    },

    estado: {
      type: 'string',
      isIn: [
        'En Compra',
        'Pagado',
      ],
      defaultsTo: 'En Compra'
    },

    detalles: {
      collection: 'FacturaDetalle',
      via: 'idFacturaCabecera',
    },

    idUsuario:{
      model: 'Usuario'
    },

    idEvento:{
      model:'Eventos'
    },
    nombreCajero: {
      type: 'string'
    },
  },

};
