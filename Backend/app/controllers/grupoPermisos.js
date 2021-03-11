const { errorMessage, successMessage, status } = require("../helpers/status");
const {
  getUsuariosPorGrupoService,
  getUsuariosPorGrupoIDService,
} = require("../services/grupoPermisos");

const getUsuariosPorGrupo = async (req, res) => {
  try {
    const usuariosPorGrupo = await getUsuariosPorGrupoService();

    if (!usuariosPorGrupo) {
      errorMessage.error = "No fue posible realizar la consulta.";
      return res.status(status.bad).send(errorMessage);
    }

    successMessage.data = usuariosPorGrupo;
    return res.status(status.success).send(successMessage);
  } catch (e) {
    errorMessage.error = "No fue posible realizar la consulta.";
    return res.status(status.bad).send(errorMessage);
  }
};

const getUsuariosPorGrupoID = async (req, res) => {
  try {
    const { codigo_grupo } = req.params;

    const usuariosPorGrupo = await getUsuariosPorGrupoIDService(codigo_grupo);

    if (!usuariosPorGrupo) {
      errorMessage.error = "No fue posible realizar la consulta.";
      return res.status(status.bad).send(errorMessage);
    }

    successMessage.data = usuariosPorGrupo;
    return res.status(status.success).send(successMessage);
  } catch (e) {
    errorMessage.error = "No fue posible realizar la consulta.";
    return res.status(status.bad).send(errorMessage);
  }
};

module.exports = {
  getUsuariosPorGrupo,
  getUsuariosPorGrupoID,
};
