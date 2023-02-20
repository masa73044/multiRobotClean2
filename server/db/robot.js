const Sequelize = require('sequelize');
const db = require('./database');

const Robot = db.define('robot', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  fuelType: {
    type: Sequelize.STRING,
    allowNull: false,
    isEmpty: false,
    defaultValue: 'electric',
    validate: {
      notEmpty: true,
      isIn: [['diesel', 'gas', 'electric']],
    },
  },
  fuelLevel: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {
      min: 0,
      max: 100,
    },
    defaultValue: 100,
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://www.irobot.com/-/media/images/features/product-based-feature-component/roomba/s9_s9-_photo_insitu_edgecleaning_desktop_1733x800.ashx?h=646&amp;iar=0&amp;mw=1400&amp;w=1400&amp;hash=EC5473A5028CA50949409CACA642B9EF',
  },
});

module.exports = Robot;
