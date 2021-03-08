"use strict";

const { Deferrable, DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable(
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
              model: "opciones",
              key: "codigo_opcion",
              deferrable: Deferrable.INITIALLY_IMMEDIATE,
            },
          },
          codigo_grupo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: "grupo_permisos",
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
        { transaction }
      );
      await transaction.commit();
    } catch (e) {
      await transaction.rollback();
      throw e;
    }
  },

  down: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.dropTable("permisos", { transaction });
      await transaction.commit();
    } catch (e) {
      await transaction.rollback();
      throw e;
    }
  },
};
