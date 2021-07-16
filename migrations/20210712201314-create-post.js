'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      image: {
        type: Sequelize.STRING
      },
      postedBy: {
        type: Sequelize.STRING
      },
      text: {
        type: Sequelize.STRING
      },
      artist_id: {
        references: {
          model: 'artists',
          key: 'id'
        },
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('posts')
  }
}
