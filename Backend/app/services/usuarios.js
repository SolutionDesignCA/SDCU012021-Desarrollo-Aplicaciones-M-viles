const GrupoPermisos = require("../models/grupoPermisos");
const Usuarios = require("../models/usuarios");

const getUsuariosService = async () => {
  const usuarios = await Usuarios.findAll({
    attributes: [
      "codigo_usuario",
      "nombre_usuario",
      "apellido_usuario",
      "correo_electronico",
      "usuario",
      "grupo_permisos",
    ],
  });

  return usuarios;
};

const createNewUserService = async ({ usuario, transaction }) => {
  const newUsuario = await Usuarios.create(usuario, { transaction });
  return newUsuario;
};

const editUsuarioService = async ({ codigo_usuario, usuario, transaction }) => {
  const user = await Usuarios.findByPk(codigo_usuario);

  if (!user) {
    return null;
  }

  /**
   * usuario: {
   *      nombre_usuario,
   *      apellido_usuario,
   *      correo_electronico,
   *      usuario,
   *      contrasenia,
   *      grupo_permisos
   * }
   */

  user.set(usuario);
  await user.save({ transaction });

  return user;
};

const deleteUsuarioService = async ({ codigo_usuario, transaction }) => {
  const deletedUser = await Usuarios.destroy({
    where: { codigo_usuario },
    transaction,
  });
  return deletedUser;
};

const getUserByUserNameService = async (usuario) => {
  // Encontrar un usuario
  // ! No encuentre nada usuario = NULL undefined
  const user = await Usuarios.findOne({
    where: { usuario },
    include: [
      {
        model: GrupoPermisos,
      },
    ],
  });
  return user;
};

const getUsuarioByIDService = async (codigo_usuario) => {
  // Encrontrar un usuario
  // ! No econtrar nada NULL
  const usuario = await Usuarios.findByPk(codigo_usuario, {
    attributes: [
      "codigo_usuario",
      "nombre_usuario",
      "apellido_usuario",
      "correo_electronico",
      "usuario",
      "grupo_permisos",
    ],
    include: [
      {
        model: GrupoPermisos,
      },
    ],
  });

  return usuario;
};

module.exports = {
  getUsuariosService,
  createNewUserService,
  editUsuarioService,
  deleteUsuarioService,
  getUserByUserNameService,
  getUsuarioByIDService,
};
