'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.belongsTo(models.Artist, {
        foreignKey: 'artist_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Post.init(
    {
      image: DataTypes.STRING,
      postedBy: DataTypes.STRING,
      text: DataTypes.STRING,
      style: {
        type: DataTypes.ENUM,
        values: [
          'americanTraditional',
          'neoTraditional',
          'tribal',
          'photoRealism',
          'japanese',
          'portrait',
          'geometric',
          'waterColor',
          'biomechanical',
          'lettering',
          'other'
        ]
      },
      artist_id: {
        references: {
          model: 'artists',
          key: 'id'
        },
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE'
      }
    },
    {
      sequelize,
      modelName: 'Post',
      tableName: 'posts'
    }
  )
  return Post
}
