"use strict";

const { DataTypes, Deferrable } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable(
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
        { transaction }
      );

      await queryInterface.bulkInsert(
        "grupo_permisos",
        [
          {
            descripcion: "Administrador",
            es_administrador: true,
          },
        ],
        { transaction }
      );

      await queryInterface.addColumn(
        "usuarios",
        "grupo_permisos",
        {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "grupo_permisos",
            key: "codigo_grupo",
            deferrable: Deferrable.INITIALLY_IMMEDIATE,
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
      await queryInterface.removeColumn("usuarios", "grupo_permisos", {
        transaction,
      });
      await queryInterface.dropTable("grupo_permisos", { transaction });
      await transaction.commit();
    } catch (e) {
      await transaction.rollback();
      throw e;
    }
  },
};
