const { status, errorMessage, successMessage } = require("../helpers/status");
const { getUsuariosService } = require("../services/usuarios");

/**
 * Listar Todos los usuarios en la DB
 * @param {*} req
 * @param {*} res
 */
const getUsuarios = async (req, res) => {
  // * Listar todos los usuarios en la DB

  try {
    const usuarios = await getUsuariosService();

    if (!usuarios) {
      errorMessage.error = "No fue posible realizar la operacion.";
      return res.status(status.error).send(errorMessage);
    }

    successMessage.data.usuarios = usuarios;

    return res.status(status.created).send(successMessage);
  } catch (e) {
    console.log(e);
    errorMessage.error = "No fue posible realizar la operacion.";
    return res.status(status.bad).send(errorMessage);
  }
};

module.exports = {
  getUsuarios,
};
