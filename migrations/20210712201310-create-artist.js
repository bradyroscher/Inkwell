'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('artists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      image: {
        type: Sequelize.STRING
      },
      bio: {
        type: Sequelize.STRING
      },
      americanTraditional: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      neoTraditional: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      tribal: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      photoRealism: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      japanese: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      portrait: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      geometric: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      waterColor: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      biomechanical: {
        allowNull: false,
        type: Sequelize.STRING
      },
      lettering: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      other: {
        allowNull: false,
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
      shop_id: {
        references: {
          model: 'shops',
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
    await queryInterface.dropTable('artists')
  }
}
