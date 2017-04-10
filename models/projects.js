var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ProjectSchema = new Schema({
  description: String
});

var Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;
