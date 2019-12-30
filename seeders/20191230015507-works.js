'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Works', [{
      projectTitle:'test-title',
      description:'test-desc',
      gifUrl:'test-gif-url',
      deployedUrl:'yeveloper.surge.sh',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Works', null, {} )
  }
};
