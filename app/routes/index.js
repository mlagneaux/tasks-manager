var express = require('express');
var router = express.Router();

var model = require('../models/model');
var taskModel = model.taskModel;

/* GET home page. */
router.get('/', function(req, res) {
  taskModel.getTasks(function(err, records){
    //console.log(records);
    var data = {tasks : records};

    //res.render('taskList', { tasks: records});
    res.json(data);
  });
});

module.exports = router;
