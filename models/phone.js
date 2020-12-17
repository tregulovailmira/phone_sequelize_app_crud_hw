'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Phone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Phone.init(
    {
      brand: {
        allowNull: false,
        type: DataTypes.STRING(16),
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      model: {
        allowNull: false,
        type: DataTypes.STRING(16),
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      yearOfIssue: {
        allowNull: false,
        type: DataTypes.STRING(4),
        validate: {
          notNull: true,
          is: /20[0-9]{2}/,
        },
      },
      RamSizeGb: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          notNull: true,
          min: 0,
        },
      },
      cpu: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      screenDiagonal: {
        allowNull: false,
        type: DataTypes.REAL,
        validate: {
          notNull: true,
          min: 0,
        },
        isHaveNfc: {
          allowNull: false,
          type: DataTypes.BOOLEAN,
          validate: {
            notNull: true,
          },
        },
      },
    },
    {
      underscored: true,
      sequelize,
      modelName: 'phone',
      indexes: [
        {
          unique: true,
          fields: ['brand', 'model', 'year_of_issue'],
        },
      ],
    }
  );
  return Phone;
};
