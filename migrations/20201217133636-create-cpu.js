'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cpus', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      numberOfCores: {
        type: Sequelize.INTEGER
      },
      frequencyMhz: {
        type: Sequelize.INTEGER
      },
      instructionSet: {
        type: Sequelize.STRING
      },
      technicalPtocessNm: {
        type: Sequelize.INTEGER
      },
      tdpWt: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('cpus');
  }
};