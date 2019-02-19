/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */
module.exports.bootstrap = async function() {

  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // // Set up fake development data (or if we already have some, avast)
  if (await Rol.count() > 0) {
    return;
  }
  //
  await Rol.createEach([
    { nombre: 'Administrador' ,},
    { nombre: 'Usuario', },
    { nombre: 'Cliente' ,},
    { nombre: 'Cajero', },
    //   // etc.
  ]);
  if (await Usuario.count() > 0) {
    return;
  }
  //
  await Usuario.createEach([
    { nombre: 'Paul' , correo: 'paul.cisneros@epn.edu.ec',password: 'X12345678x@', fechanacimiento: '1995-03-20',},
    { nombre: 'Usuario' , correo: 'gabo.x@epn.edu.ec',password: 'X12345678x@', fechanacimiento: '1995-05-25',},
    { nombre: 'Cliente' , correo: 'gabo.x@epn.edu.ec',password: 'X12345678x@', fechanacimiento: '1995-05-25',},
    { nombre: 'Cajero' , correo: 'gabo.x@epn.edu.ec',password: 'X12345678x@', fechanacimiento: '1995-05-25',},

    //   // etc.
  ]);
  if (await Eventos.count() > 0) {
    return;
  }
  await Eventos.createEach([{
    nombre: 'Gala de Cine',

  },{
    nombre: 'Fiesta'
    // Set the User's Primary Key to associate the Pet with the User.

  },{
    nombre: 'Comida',

  }]);
  if (await Actor.count() > 0) {
    return;
  }
  await Actor.createEach([{
    nombres: 'Will',
    apellidos : 'Smith',
    fechanacimiento : '25-09-1968',
    numeropeliculas : 100,
    retirado  : false,
    usuario: 1,


  },{
    nombres: 'Cameron',
    apellidos : 'Diaz',
    fechanacimiento : '31-08-1972',
    numeropeliculas : 35,
    retirado  : true,
    usuario: 2,
    // Set the User's Primary Key to associate the Pet with the User.

  }]);
  if (await Pelicula.count() > 0) {
    return;
  }
  await Pelicula.createEach([{
    nombre: 'Soy Robot',
    aniolanzamiento  : 2006,
    rating  : 3,
    actoresPrincipales  : "El robot",
    sinopsis   : "Una tipica pelis del fin del mundo con robots",
    // Set the User's Primary Key to associate the Pet with the User.
    actores: 1,

  },{
    nombre: 'Soy leyenda',
    aniolanzamiento  : 2008,
    rating  : 5,
    actoresPrincipales  : "El perro",
    sinopsis   : "Una tipica pelis del fin del mundo",
    // Set the User's Primary Key to associate the Pet with the User.
    actores: 1,
  },{
    nombre: 'Angeles de Charly',
    aniolanzamiento  : 2000,
    rating  : 5,
    actoresPrincipales  : "3 angeles",
    sinopsis   : "Una tipica pelis de espias",
    // Set the User's Primary Key to associate the Pet with the User.
    actores: 2,
  }]);

  if (await FacturaCabecera.count() > 0) {
    return;
  }

  await FacturaCabecera.createEach([{
    nombre: 'Paul',
    cedula  : 1723436208,
    telefono  : 2654036,
    direccion  : "Mi casa",
    correo   : "paul.cisneros@epn.edu.ec",
    fecha: "18/02/2019",
    total: 15,
    tipoPago: "Efectivo",
    estado: "En Compra",
    idUsuario: 3,
    idEvento: 1,
    nombreCajero:"Cajero",

  },
    {
      nombre: 'Paul',
      cedula  : 1723436208,
      telefono  : 2654036,
      direccion  : "Mi casa",
      correo   : "paul.cisneros@epn.edu.ec",
      fecha: "18/02/2019",
      total: 15,
      tipoPago: "Efectivo",
      estadoo: "Pagado",
      idUsuario: 3,
      idEvento: 1,
      nombreCajero:"Cajero",
    }]);
  // ```
  await Rol.addToCollection(1, 'usuarios', [1]);
  await Rol.addToCollection(2, 'usuarios', [2]);
  await Rol.addToCollection(3, 'usuarios', [3]);
  await Rol.addToCollection(4, 'usuarios', [4]);

};
