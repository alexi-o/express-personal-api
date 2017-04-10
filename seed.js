// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var new_project = {description: "Sharp rocks. Middle of nowhere."}

db.Project.create(new_project, function(err, project){
  if (err){
    return console.log("Error:", err);
  }

  console.log("Created new project", project._id)
  process.exit();
})

var personal_api = [
{
	name: "Alexi",
	github_link: "https://github.com/alexi-o/",
	current_city: "Denver",
	pets: {
		name: "Willow",
		type: "Dog",
		breed: "Lab"
	}
}]