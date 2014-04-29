var connection_string = '127.0.0.1:27017/tasks-manager';

var mongojs = require('mongojs');
var db = mongojs(connection_string, ['tasks']);
var data = db.collection('tasks');

data.find({}).forEach(function(err,doc){
    if(err) throw err;
    if(doc) {console.dir(doc);}
});
