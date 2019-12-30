'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Works', [{
      projectType: 'Web Design Assignment',
      projectTitle:'Podpickr',
      description:"My second project during General Assembly's Software Engineering Immersive Bootcamp- I converted coffee into code. My curiosity about the actual caffeine content of the pods (in mg) sort of consumed me, so I searched the internet and came up with this list from various sources. Best thing is- I actually use this myself when placing an order for home. ",
      gifUrl:'https://i.imgur.com/WeQbixr.gif',
      deployedUrl:'http://podpickr.surge.sh',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
    projectType: 'Web Design Assignment Collaboration',
    projectTitle:'Fridge Food',
    description:"Fridge Food is a group project featuring thorough UX research and design by Hope Magracia and Roma Patel. Development was done by Hadeeqa Saman, Philip Ryan, and myself. Philip nailed the search functionality while Hadeeqa built the web and mobile layouts, and the foundation for our API calls. I focused on the image carousel- used #bootstrap on the final product but I experimented with 3 packages and built one from scratch. Final product was built using #reactjs for all functionality. It was amazing to part of making this come to life. Can't wait to produce more and more web apps, and congrats to the UX team on completing their course!",
    gifUrl:'https://i.imgur.com/mHRLcyu.gif',
    deployedUrl:'',
    createdAt: new Date(),
    updatedAt: new Date()
    }
  ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Works', null, {} )
  }
};
