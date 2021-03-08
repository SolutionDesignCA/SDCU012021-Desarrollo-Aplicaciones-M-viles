const { DataTypes } = require("sequelize");

const db = require("../db/db");
const GrupoPermisos = require("./GrupoPermisos");
const Opciones = require("./opciones");

const Permisos = db.define(
  "permisos",
  {
    codigo_permiso: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    codigo_opcion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Opciones,
        key: "codigo_opcion",
        deferrable: Deferrable.INITIALLY_IMMEDIATE,
      },
    },
    codigo_grupo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: GrupoPermisos,
        key: "codigo_grupo",
        deferrable: Deferrable.INITIALLY_IMMEDIATE,
      },
    },
    listar: {
      type: DataTypes.BOOLEAN,
    },
    visualizar: {
      type: DataTypes.BOOLEAN,
    },
    editar: {
      type: DataTypes.BOOLEAN,
    },
    eliminar: {
      type: DataTypes.BOOLEAN,
    },
  },
  { tableName: "permisos" }
);

Opciones.hasMany(Permisos, { foreignKey: "codigo_opcion" });
Permisos.belongsTo(Opciones, { foreignKey: "codigo_opcion" });

GrupoPermisos.hasMany(Permisos, { foreignKey: "codigo_grupo" });
Permisos.belongsTo(GrupoPermisos, { foreignKey: "codigo_grupo" });

module.exports = Permisos;
