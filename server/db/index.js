// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:
const Sequelize = require('sequelize');
const db = require('./database');
const Project = require('./project');
const Robot = require('./robot');

// This is a great place to establish associations between your models
// (https://sequelize-guides.netlify.com/association-types/).
// Example:
//
// Puppy.belongsTo(Owner)

const RobotProject = db.define('robot_project', {
  role: Sequelize.STRING,
});
Robot.belongsToMany(Project, { through: RobotProject });
Project.belongsToMany(Robot, { through: RobotProject });

module.exports = {
  // Include your models in this exports object as well!
  db,
  Project,
  Robot,
};
