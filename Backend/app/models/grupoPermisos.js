const db = require("../db/db");
const { DataTypes, Deferrable } = require("sequelize");

const GrupoPermisos = db.define(
  "grupo_permisos",
  {
    codigo_grupo: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
    },
    es_administrador: {
      type: DataTypes.BOOLEAN,
    },
  },
  { tableName: "grupo_permisos", timestamps: false }
);

module.exports = GrupoPermisos;
