const Usuarios = require("../models/usuarios");

const getUsuariosService = async () => {
  const usuarios = await Usuarios.findAll();
  return usuarios;
};

module.exports = {
  getUsuariosService,
};
