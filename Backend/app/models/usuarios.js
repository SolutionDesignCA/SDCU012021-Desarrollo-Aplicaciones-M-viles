const { DataTypes, Deferrable } = require("sequelize");

const db = require("../db/db");
const GrupoPermisos = require("./grupoPermisos");

const Usuarios = db.define(
  "usuarios",
  {
    codigo_usuario: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
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
    },
  },
  {
    tableName: "usuarios",
    timestamps: false,
  }
);

GrupoPermisos.hasMany(Usuarios, { foreignKey: "codigo_grupo" });
Usuarios.belongsTo(GrupoPermisos, { foreignKey: "codigo_grupo" });

module.exports = Usuarios;
