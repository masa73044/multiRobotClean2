const Sequelize = require('sequelize');
const db = require('./database');

const Project = db.define('project', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  deadline: {
    type: Sequelize.DATEONLY,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
  priority: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 5,
    validate: {
      min: 0,
      max: 10,
    },
  },
  completed: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  description: {
    type: Sequelize.TEXT,
    // allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Project;
