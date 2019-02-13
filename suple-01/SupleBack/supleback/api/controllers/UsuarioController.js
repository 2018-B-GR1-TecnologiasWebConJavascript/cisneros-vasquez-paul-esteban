/**
 * UsuarioController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  login: async (req, res) => {
    const parametros = req.allParams();

    var usuarioLogeado = await Usuario.find({
      nombre: parametros.nombre,
      password: parametros.password,
    });

    const error = usuarioLogeado.length === 0;

    if (!error) {
      return res.ok(usuarioLogeado[0]);
    } else {
      return res.badRequest({mensaje: 'Usuario Invalido'});
    }

  },

  crearol: async (req, res) => {
    const parametros = req.allParams();

    var usuarioRol = await Usuario.find({
      id: parametros.idusuario,
    });
    const error = usuarioRol.length === 0;
    if (!error) {
      await Usuario.addToCollection(parametros.idusuario, 'roles', [parametros.idrol]);
      return res.ok(usuarioRol[0]);
    } else {
      return res.badRequest({mensaje: 'Usuario No consta en la base'});
    }




  },
  eliminarrol: async (req, res) => {
    const parametros = req.allParams();

    var usuarioRol = await Usuario.find({
      id: parametros.idusuario,
    });
    const error = usuarioRol.length === 0;
    if (!error) {
      await Usuario.removeFromCollection(parametros.idusuario, 'roles', [parametros.idrol]);
      return res.ok(usuarioRol[0]);
    } else {
      return res.badRequest({mensaje: 'Usuario No consta en la base'});
    }
  }
};

