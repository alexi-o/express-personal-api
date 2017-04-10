// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var project_list = [
{
	name: "Express Personal API",
	description: "A project currently testing my patience with the backend.",
	url: "https://github.com/alexi-o/express-personal-api" 
},
{
	name: "Whack-A-Trump",
	description: "A whack-a-mole-esque game with POTUS Trump",
	url: "https://github.com/alexi-o/whack-a-trump"
}]

db.Project.create(project_list, function(err, projects){
	if (err) { return console.log('err', err); }
	console.log("created" projects.length, "books");
	process.exit();
});