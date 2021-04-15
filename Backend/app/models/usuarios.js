const db = require("../db/db");
const { DataTypes, Deferrable } = require("sequelize");

const GrupoPermisos = require("./grupoPermisos");

const Usuarios = db.define(
  "usuarios",
  {
    codigo_usuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombre_usuario: {
      type: DataTypes.STRING,
    },
    apellido_usuario: {
      type: DataTypes.STRING,
    },
    correo_electronico: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      },
      unique: true,
    },
    usuario: {
      type: DataTypes.STRING,
      unique: true,
    },
    contrasenia: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    grupo_permisos: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: GrupoPermisos,
        key: "codigo_grupo",
        deferrable: Deferrable.INITIALLY_IMMEDIATE,
      },
    },
    cantidad: {
      type: DataTypes.INTEGER,
    },
  },
  { tableName: "usuarios", timestamps: false }
);

Usuarios.belongsTo(GrupoPermisos, { foreignKey: "grupo_permisos" });
GrupoPermisos.hasMany(Usuarios, { foreignKey: "grupo_permisos" });

module.exports = Usuarios;
