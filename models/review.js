'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Review.belongsTo(models.User, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      // Review.belongsTo(models.Artist, {
      //   foreignKey: 'artist_id',
      //   onDelete: 'CASCADE',
      //   onUpdate: 'CASCADE'
      // })
      // define association here
    }
  }
  Review.init(
    {
      rating: {
        type: DataTypes.ENUM,
        values: ['1', '2', '3', '4', '5']
      },
      text: DataTypes.STRING,
      postedBy: DataTypes.STRING,
      user_id: {
        references: {
          model: 'users',
          key: 'id'
        },
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE'
      }
      // artist_id: {
      //   references: {
      //     model: 'artists',
      //     key: 'id'
      //   },
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      //   onDelete: 'CASCADE'
      // }
    },
    {
      sequelize,
      modelName: 'Review',
      tableName: 'reviews'
    }
  )
  return Review
}
