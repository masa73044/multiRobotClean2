'use strict';

const Robot = require('../db/robot');
const router = require('express').Router();
const Project = require('../db/project');

router.get('/', async (req, res, next) => {
  try {
    const robots = await Robot.findAll();
    res.json(robots);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const robot = await Robot.findByPk(req.params.id, {
      include: {
        model: Project,
      },
    });
    res.json(robot);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    console.log('req body', req.body);
    res.status(201).send(await Robot.create(req.body));
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const robot = await Robot.findByPk(req.params.id);
    await robot.destroy();
    res.send(robot);
  } catch (error) {
    next(error);
  }
});
// // similar route
// router.delete('/:id', async (req, res, next) => {
//   try {
//     const todo = await Todo.findByPk(req.params.id);
//     await todo.destroy();
//     res.send(todo);
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = router;
