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
    //   // etc.
  ]);
  if (await Usuario.count() > 0) {
    return;
  }
  //
  await Usuario.createEach([
    { nombre: 'Paul' , correo: 'paul.cisneros@epn.edu.ec',password: 'X12345678@', fechanacimiento: '1995-03-20',},
    { nombre: 'Gabo' , correo: 'gabo.x@epn.edu.ec',password: 'X12345678@', fechanacimiento: '1995-05-25',},

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
  // ```
  await Rol.addToCollection(1, 'usuarios', [1]);
  await Rol.addToCollection(2, 'usuarios', [2]);

};
