const GrupoPermisos = require("../models/grupoPermisos");
const Usuarios = require("../models/usuarios");

const getUsuariosPorGrupoService = async () => {
  const usuariosPorGrupo = await GrupoPermisos.findAll({
    include: [
      {
        model: Usuarios,
      },
    ],
  });
  return usuariosPorGrupo;
};

const getUsuariosPorGrupoIDService = async (codigo_grupo) => {
  //   const usuariosPorGrupo = await GrupoPermisos.findAll({
  //     where: { codigo_grupo },
  //     include: [
  //       {
  //         model: Usuarios,
  //       },
  //     ],
  //   });
  const usuariosPorGrupo = await GrupoPermisos.findByPk(codigo_grupo, {
    include: [
      {
        model: Usuarios,
      },
    ],
  });
  return usuariosPorGrupo;
};

module.exports = {
  getUsuariosPorGrupoService,
  getUsuariosPorGrupoIDService,
};
