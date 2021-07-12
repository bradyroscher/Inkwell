'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
      shopName: {
        type: DataTypes.STRING,
        allowNull: true
      },
      americanTraditional: {
        types: DataTypes.BOOLEAN,
        allowNull: true
      },
      neoTraditional: {
        types: DataTypes.BOOLEAN,
        allowNull: true
      },
      tribal: {
        types: DataTypes.BOOLEAN,
        allowNull: true
      },
      photoRealism: {
        types: DataTypes.BOOLEAN,
        allowNull: true
      },
      japanese: {
        types: DataTypes.BOOLEAN,
        allowNull: true
      },
      portrait: {
        types: DataTypes.BOOLEAN,
        allowNull: true
      },
      geometric: {
        types: DataTypes.BOOLEAN,
        allowNull: true
      },
      other: {
        types: DataTypes.BOOLEAN,
        allowNull: true
      }
    },
    {
      sequelize,
      modelName: 'User'
    }
  )
  return User
}
