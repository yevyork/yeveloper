'use strict';
module.exports = (sequelize, DataTypes) => {
  const Works = sequelize.define('Works', {
    projectType: DataTypes.STRING,
    projectTitle: DataTypes.STRING,
    description: DataTypes.TEXT,
    gifUrl: DataTypes.STRING,
    deployedUrl: DataTypes.STRING
  }, {});
  Works.associate = function(models) {
    // associations can be defined here
  };
  return Works;
};