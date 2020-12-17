'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cpu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cpu.hasMany(models.Phone, {
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      });
    }
  }
  Cpu.init(
    {
      name: {
        type: DataTypes.STRING(32),
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      numberOfCores: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          notNull: true,
          min: 0,
        },
      },
      frequencyMhz: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          notNull: true,
          min: 0,
        },
      },
      instructionSet: {
        allowNull: false,
        type: DataTypes.STRING(64),
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      technicalPtocessNm: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          notNull: true,
          min: 0,
        },
      },
      tdpWt: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          notNull: true,
          min: 0,
        },
      },
    },
    {
      sequelize,
      modelName: 'Cpu',
      underscored: true,
    }
  );
  return Cpu;
};
