const { errorMessage, status, successMessage } = require("../helpers/status");
const {
  getUsuariosService,
  createNewUserService,
  editUsuarioService,
  deleteUsuarioService,
  getUserByUserNameService,
  getUsuarioByIDService,
} = require("../services/usuarios");
const db = require("../db/db");
const { validPassword, generateToken } = require("../helpers/validations");

/**
 * Listar Usuarios en la DB
 * @param {*} req
 * @param {*} res
 * @returns
 */
const getUsuarios = async (req, res) => {
  try {
    // * 1. Null
    // * 2. Undefined
    // * 3. []
    const usuarios = await getUsuariosService();

    if (!usuarios) {
      errorMessage.error = "No fue posible realizar la consulta.";
      return res.status(status.error).send(errorMessage);
    }

    // * Response to client

    successMessage.data = usuarios;

    return res.status(status.success).send(successMessage);
  } catch (e) {
    errorMessage.error = "No fue posible realizar la consulta.";
    return res.status(status.error).send(errorMessage);
  }
};

const getUsuario = async (req, res) => {
  try {
    const { codigo_usuario } = req.params;

    const usuario = await getUsuarioByIDService(codigo_usuario);

    if (!usuario) {
      errorMessage.error = "No fue posible realizar la consulta.";
      return res.status(status.bad).send(errorMessage);
    }

    successMessage.data = usuario;

    return res.status(status.success).send(successMessage);
  } catch (e) {
    errorMessage.error = "No fue posible realizar la consulta.";
    return res.status(status.error).send(errorMessage);
  }
};

const createUsuario = async (req, res) => {
  try {
    // req.body aqui viene la info del cliente con las variables
    // req = {
    //     body: {
    //         usuario
    //     }
    // }

    const transaction = await db.transaction();

    console.log(req);

    const { usuario } = req.body;

    console.log(usuario);

    const newUsuario = await createNewUserService({ transaction, usuario });

    if (!newUsuario) {
      errorMessage.error = "No fue posible crear el usuario.";
      await transaction.rollback();
      return res.status(status.error).send(errorMessage);
    }

    successMessage.data = newUsuario;

    await transaction.commit();

    return res.status(status.created).send(successMessage);
  } catch (e) {
    console.log(e);
    errorMessage.error = "No fue posible crear el usuario.";
    await transaction.rollback();
    return res.status(status.error).send(errorMessage);
  }
};

const editUsuario = async (req, res) => {
  const transaction = await db.transaction();

  try {
    const { usuario } = req.body;
    const { codigo_usuario } = req.params;

    const editedUsuario = await editUsuarioService({
      codigo_usuario,
      usuario,
      transaction,
    });

    if (!editedUsuario) {
      errorMessage.error = "No fue posible editar el usuario.";
      await transaction.rollback();
      return res.status(status.error).send(errorMessage);
    }

    successMessage.data = editedUsuario;

    await transaction.commit();

    return res.status(status.success).send(successMessage);
  } catch (e) {
    errorMessage.error = "No fue posible editar el usuario.";
    await transaction.rollback();
    return res.status(status.error).send(errorMessage);
  }
};

const deleteUsuario = async (req, res) => {
  const transaction = await db.transaction();

  try {
    const { codigo_usuario } = req.params;

    const deletedUser = await deleteUsuarioService({
      codigo_usuario,
      transaction,
    });

    if (!deletedUser) {
      errorMessage.error = "No fue posible eliminar el usuario.";
      await transaction.rollback();
      return res.status(status.error).send(errorMessage);
    }

    successMessage.data = deletedUser;

    await transaction.commit();

    return res.status(status.success).send(successMessage);
  } catch (e) {
    console.log(e);
    errorMessage.error = "No fue posible eliminar el usuario.";
    await transaction.rollback();
    return res.status(status.error).send(errorMessage);
  }
};

const loginUser = async (req, res) => {
  try {
    const { usuario, contrasenia } = req.body;

    const user = await getUserByUserNameService(usuario);

    if (
      !validPassword({
        userPassword: user.contrasenia,
        providedPassword: contrasenia,
      })
    ) {
      errorMessage.error = "Credenciales no validas";
      return res.status(status.unauthorized).send(errorMessage);
    }

    const userToken = {
      nombre_usuario: user.nombre_usuario,
      apellido_usuario: user.apellido_usuario,
      correo_electronico: user.correo_electronico,
      usuario: user.usuario,
      grupo_permisos: user.grupo_permisos,
    };

    const token = generateToken(userToken);

    successMessage.data = token;

    return res.status(status.success).send(successMessage);
  } catch (e) {
    console.log(e);
    errorMessage.error = "No fue posible iniciar sesion";
    return res.status(status.error).send(errorMessage);
  }
};

module.exports = {
  getUsuarios,
  createUsuario,
  editUsuario,
  deleteUsuario,
  loginUser,
  getUsuario,
};
