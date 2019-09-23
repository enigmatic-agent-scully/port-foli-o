const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  img1: { type: String, required: true },
  img2: { type: String, required: false },
  github_link: { type: String, required: true },
  deployed_link: { type: String, required: false },
  tech_stack: { type: String, required: true }
});

var Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;
