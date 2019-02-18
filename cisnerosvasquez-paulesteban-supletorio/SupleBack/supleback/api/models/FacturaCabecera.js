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
      //regex: /^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/
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
    }
  },

};
