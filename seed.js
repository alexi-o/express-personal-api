// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

db.Project.remove({}, function(err, projects){
	if (err){
		console.log(err);
	}
	console.log("removed projects");
});

var projects = [
{
	name: "Express Personal API",
	description: "A project currently testing my patience with the backend.",
	url: "https://github.com/alexi-o/express-personal-api" 
},
{
	name: "Whack-A-Trump",
	description: "A whack-a-mole-esque game with POTUS Trump",
	url: "https://github.com/alexi-o/whack-a-trump"
},
{
	name: "LOTR Dom Manipulation",
	description: "Nazgul's reign continues..",
	url: "https://github.com/alexi-o/dom-manipulation-lotr-lab"
}	
];

db.Project.create(projects, function(err, projects){
	if (err) { 
	return console.log('err', err); 
	} else {
	console.log('created', projects);
	process.exit();
}
});