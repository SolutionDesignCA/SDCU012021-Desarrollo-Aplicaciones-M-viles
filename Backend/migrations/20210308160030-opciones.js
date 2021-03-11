"use strict";

const { DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable(
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
        { transaction }
      );

      await queryInterface.bulkInsert(
        "opciones",
        [
          {
            descripcion: "Pedidos",
          },
          {
            descripcion: "Grupo de Permisos",
          },
          {
            descripcion: "Clientes",
          },
          {
            descripcion: "Usuarios",
          },
          {
            descripcion: "Productos",
          },
        ],
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
      await queryInterface.dropTable("opciones", { transaction });
      await transaction.commit();
    } catch (e) {
      await transaction.rollback();
      throw e;
    }
  },
};
