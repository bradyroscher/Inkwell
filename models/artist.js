'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Artist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Artist.hasMany(models.Post, {
        foreignKey: 'artist_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Artist.hasMany(models.Review, {
        foreignKey: 'artist_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Artist.belongsTo(models.User, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Artist.belongsTo(models.Shop, {
        foreignKey: 'shop_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Artist.init(
    {
      image: DataTypes.STRING,
      bio: DataTypes.STRING,
      americanTraditional: DataTypes.BOOLEAN,
      neoTraditional: DataTypes.BOOLEAN,
      tribal: DataTypes.BOOLEAN,
      photoRealism: DataTypes.BOOLEAN,
      japanese: DataTypes.BOOLEAN,
      portrait: DataTypes.BOOLEAN,
      geometric: DataTypes.BOOLEAN,
      waterColor: DataTypes.BOOLEAN,
      biomechanical: DataTypes.BOOLEAN,
      lettering: DataTypes.BOOLEAN,
      other: DataTypes.STRING,
      user_id: {
        references: {
          model: 'users',
          key: 'id'
        },
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE'
      },
      shop_id: {
        references: {
          model: 'shops',
          key: 'id'
        },
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE'
      }
    },
    {
      sequelize,
      modelName: 'Artist',
      tableName: 'artists'
    }
  )
  return Artist
}
