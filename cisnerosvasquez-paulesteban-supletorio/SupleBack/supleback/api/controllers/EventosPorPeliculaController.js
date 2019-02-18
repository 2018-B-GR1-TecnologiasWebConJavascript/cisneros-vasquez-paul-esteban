/**
 * EventosPorPeliculaController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  eliminareventopelicula: async (req, res) => {
    const parametros = req.allParams();

    var eventoaelimiinar = await EventosPorPelicula.destroy({
      idEvento: parametros.idEvento,
      idPelicula: parametros.idPelicula,
    }).fetch();

    const error = eventoaelimiinar === undefined;

    if (!error) {
      return res.ok(eventoaelimiinar);
    } else {
      return res.badRequest({mensaje: 'Relacionn eliminada del evento'});
    }

  },
};

