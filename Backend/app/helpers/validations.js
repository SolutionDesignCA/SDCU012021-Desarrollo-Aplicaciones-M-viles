const jwt = require("jsonwebtoken");
const { JWTSecret } = require("../../env");

const validPassword = ({ userPassword, providedPassword }) => {
  return userPassword === providedPassword;
};

const generateToken = ({
  nombre_usuario,
  apellido_usuario,
  correo_electronico,
  usuario,
  grupo_permisos,
}) => {
  const token = jwt.sign(
    {
      nombre_usuario,
      apellido_usuario,
      correo_electronico,
      usuario,
      grupo_permisos,
    },
    JWTSecret,
    { expiresIn: "0.5 hrs" }
  );

  return token;
};

module.exports = {
  validPassword,
  generateToken,
};
