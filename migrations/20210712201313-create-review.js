'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      rating: {
        type: Sequelize.ENUM,
        values: ['1', '2', '3', '4', '5']
      },
      text: {
        type: Sequelize.STRING
      },
      postedBy: {
        type: Sequelize.STRING
      },
      user_id: {
        references: {
          model: 'users',
          key: 'id'
        },
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE'
      },
      // artist_id: {
      //   references: {
      //     model: 'artists',
      //     key: 'id'
      //   },
      //   type: Sequelize.INTEGER,
      //   allowNull: false,
      //   onDelete: 'CASCADE'
      // },
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
    await queryInterface.dropTable('reviews')
  }
}
