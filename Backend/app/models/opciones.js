const { DataTypes } = require("sequelize");

const db = require("../db/db");

const Opciones = db.define(
  "opciones",
  {
    codigo_opcion: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
    },
  },
  { tableName: "opciones" }
);

module.exports = Opciones;
