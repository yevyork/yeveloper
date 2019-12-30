'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Works', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      projectType: {
        type: Sequelize.STRING
      },
      projectTitle: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      gifUrl: {
        type: Sequelize.STRING
      },
      deployedUrl: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Works');
  }
};