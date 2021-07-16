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
      User.hasMany(models.Review, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      User.hasOne(models.Artist, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      userType: {
        type: DataTypes.ENUM,
        values: ['user', 'artist']
      }
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users'
    }
  )
  return User
}
