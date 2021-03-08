const { DataTypes } = require("sequelize");

const db = require("../db/db");

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
  { tableName: "grupo_permisos" }
);

module.exports = GrupoPermisos;
