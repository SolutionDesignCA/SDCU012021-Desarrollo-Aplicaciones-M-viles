"use strict";
const { DataTypes } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable(
        "usuarios",
        {
          codigo_usuario: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
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
      await queryInterface.dropTable("usuarios", { transaction });
      await transaction.commit();
    } catch (e) {
      await transaction.rollback();
      throw e;
    }
  },
};
