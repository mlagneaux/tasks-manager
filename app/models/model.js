var mongojs = require('mongojs');
var config = require('../config');
var TaskModel = require('./TaskModel');

var db_url = config.db.host + ':' + config.db.port + '/' + config.db.name;
var db_collections = ['tasks'];
console.log('Connection to following database: ' + db_url);
console.log('Using collections: ' + db_collections);
var db = mongojs(db_url, db_collections);

var taskModel = new TaskModel(db.collection('tasks'));

var model = {
    taskModel: taskModel
}

module.exports = model;
