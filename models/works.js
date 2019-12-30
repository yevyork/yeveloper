'use strict';
module.exports = (sequelize, DataTypes) => {
  const Works = sequelize.define('Works', {
    projectTitle: DataTypes.STRING,
    description: DataTypes.STRING,
    gifUrl: DataTypes.STRING,
    deployedUrl: DataTypes.STRING
  }, {});
  Works.associate = function(models) {
    // associations can be defined here
  };
  return Works;
};