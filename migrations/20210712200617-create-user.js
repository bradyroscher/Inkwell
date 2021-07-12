'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      }
      shopName: {
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
      other: {
        allowNull: false,
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('Users')
  }
}
