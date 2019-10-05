var express = require('express');
var router = express.Router();

const {models} = require('../models');

const {Task} = models;

router.get('/', function(req, res, next) {
  Task.find()
    .then(tasks => {
      res.json(tasks);
    })
    .catch(error => next(error));
});

router.post('/', function(req, res, next) {
  const {text} = req.body;

  const task = new Task({
    text
  })

  task.save()
    .then(task => {
      res.json(task);
    })
    .catch(error => next(error));
});

module.exports = router;
