module.exports = function(collection){
  this.collection = collection;
}

module.exports.prototype = {
  collection: null,

  setCollection: function(collection){
    this.collection = collection;
  },

  getTasks: function(callback) {
    this.collection.find().toArray(callback);
  },

  getTasksByActivity: function(searchActivity, callback){
    this.collection.find({activity: searchActivity}).toArray(callback);
  }
};
