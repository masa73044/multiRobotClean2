const { green, red } = require('chalk');
const { db, Project, Robot } = require('./server/db');

//defining a variable
//const Robot = require('./server/db/robot.js');

const robots = [
  {
    name: 'R2-D2',
    imageUrl: '/images/r2d2.png',
    fuelType: 'electric',
    fuelLevel: 88.34,
  },
  {
    name: 'R2-D3',
    imageUrl: '/images/r2d2.png',
    fuelType: 'electric',
    fuelLevel: 99.99,
  },
  {
    name: 'Roomba-s9',
    imageUrl:
      'https://www.irobot.com/-/media/images/features/product-based-feature-component/roomba/s9_s9-_photo_insitu_edgecleaning_desktop_1733x800.ashx?h=646&amp;iar=0&amp;mw=1400&amp;w=1400&amp;hash=EC5473A5028CA50949409CACA642B9EF',
    fuelType: 'electric',
    fuelLevel: 9.99,
  },
  {
    name: 'roomba-j7',
    imageUrl:
      'https://www.irobot.com/-/media/images/features/product-based-feature-component/roomba/s9_s9-_photo_insitu_edgecleaning_desktop_1733x800.ashx?h=646&amp;iar=0&amp;mw=1400&amp;w=1400&amp;hash=EC5473A5028CA50949409CACA642B9EF',
    fuelType: 'electric',
    fuelLevel: 19.99,
  },
];

const projects = [
  {
    id: 1,
    title: 'Build barn',
    description: 'Lorem Ipsum',
    completed: true,
    deadline: '2022-02-22',
    priority: 9,
  },
  {
    id: 2,
    title: 'Paint Barn',
    description: 'Lorem Ipsum',
    completed: true,
    deadline: '2022-03-22',
    priority: 8,
  },
  {
    id: 3,
    title: 'Stack barn with HAY',
    description: 'L',
    completed: true,
    deadline: '2022-04-22',
    priority: 10,
  },
];

const seed = async () => {
  try {
    await db.sync({ force: true });

    // seed your database here!

    await Promise.all(
      robots.map((robot) => {
        return Robot.create(robot);
      })
    );

    await Promise.all(
      projects.map((project) => {
        return Project.create(project);
      })
    );

    const r2d2 = await Robot.findOne({
      where: {
        name: 'R2-D2',
      },
    });

    const projectsToAssign = await Project.findAll();
    //const robotsToAssign = await Robot.findAll();
    //copy const r2d2 and await functions below for robots and projects?

    await r2d2.addProject(projectsToAssign[0]);
    await r2d2.addProject(projectsToAssign[1]);

    // console.log(green('Seeding success!'));
    db.close();
  } catch (err) {
    console.log(red(err));
  }
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green('Seeding success!'));
      db.close();
    })
    .catch((err) => {
      console.error(red('Oh noes! Something went wrong!'));
      console.error(err);
      db.close();
    });
}
