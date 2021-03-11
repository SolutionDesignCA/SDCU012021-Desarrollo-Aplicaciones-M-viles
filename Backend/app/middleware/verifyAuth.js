const jwt = require("jsonwebtoken");
const { JWTSecret } = require("../../env");
const { errorMessage, status } = require("../helpers/status");

const verifyToken = async (req, res, next) => {
  const { token } = req.headers;

  if (!token) {
    errorMessage.error = "Token not provided";
    return res.status(status.bad).send(errorMessage);
  }

  try {
    const decoded = jwt.verify(token, JWTSecret);

    req.user = {
      nombre_usuario: decoded.nombre_usuario,
      apellido_usuario: decoded.apellido_usuario,
      correo_electronico: decoded.correo_electronico,
      usuario: decoded.usuario,
      grupo_permisos: decoded.grupo_permisos,
    };

    next();
  } catch (e) {
    errorMessage.error = "Authentication Failed";
    return res.status(status.unauthorized).send(errorMessage);
  }
};

module.exports = {
  verifyToken,
};
