const jwt = require("jsonwebtoken");
const { JWTSecret } = require("../../env");

const validPassword = ({ userPassword, providedPassword }) => {
  // string == int
  // "8" == 8
  // { usuario: {asdfasdf} } == { usuario: {asdfasdf} }
  // 8 === 8
  return userPassword === providedPassword;
};

const generateToken = ({
  nombre_usuario,
  apellido_usuario,
  correo_electronico,
  usuario,
  grupo_permisos,
  descripcion,
  es_administrador,
}) => {
  // Libreria jsonwebtoken
  const token = jwt.sign(
    {
      nombre_usuario,
      apellido_usuario,
      correo_electronico,
      usuario,
      grupo_permisos,
      descripcion,
      es_administrador,
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
