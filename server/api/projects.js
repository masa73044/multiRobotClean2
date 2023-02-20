'use strict';

const Project = require('../db/project');
const router = require('express').Router();
const Robot = require('../db/robot');

router.get('/', async (req, res, next) => {
  try {
    const Projects = await Project.findAll();
    res.json(Projects);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const project = await Project.findByPk(req.params.id, {
      include: {
        model: Robot,
      },
    });
    res.json(project);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    console.log('req body', req.body);
    res.status(201).send(await Project.create(req.body));
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const project = await Project.findByPk(req.params.id);
    await project.destroy();
    res.send(project);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
