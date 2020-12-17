'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'phones',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        brand: {
          allowNull: false,
          type: Sequelize.STRING(16),
        },
        model: {
          allowNull: false,
          type: Sequelize.STRING(16),
        },
        yearOfIssue: {
          allowNull: false,
          type: Sequelize.STRING(4),
          field: 'year_of_issue',
        },
        ramSizeGb: {
          allowNull: false,
          type: Sequelize.INTEGER,
          min: 0,
          field: 'RAM_size_gb',
        },
        cpu: {
          allowNull: false,
          type: Sequelize.STRING(32),
        },
        screenDiagonal: {
          allowNull: false,
          type: Sequelize.REAL,
          min: 0,
          field: 'screen_diagonal',
        },
        isHaveNfc: {
          allowNull: false,
          type: Sequelize.BOOLEAN,
          field: 'is_have_NFC',
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
      {
        uniqueKeys: {
          uniqueTag: {
            customIndex: true,
            fields: ['brand', 'model', 'year_of_issue'],
          },
        },
      }
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Phones');
  },
};
