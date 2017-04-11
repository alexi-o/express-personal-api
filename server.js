// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/************
 * DATABASE *
 ************/

var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    woops_i_has_forgot_to_document_all_my_endpoints: false,
    message: "Welcome to Alexi's first api! Here's what you need to know!",
    documentation_url: "https://github.com/alexi-o/express-personal-api", 
    base_url: "https://mighty-basin-46898.herokuapp.com", 
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Data about me"}, 
      {method: "POST", path: "/api/projects", description: "Creates a new project"},
      {method: "PUT", path: "api/projects/:id", description: "Updates existing project"},
      {method: "DELETE", path: "api/projects/:id", description: "Deletes a project"}
    ]
  })
});
//Main profile page
app.get('/api/profile', function (req, res){
  res.json({
    name: "Alexi",
  github_link: "https://github.com/alexi-o/",
  current_city: "Denver",
  pets: [
    {name: "Willow",
    type: "Dog",
    breed: "Lab" }
  ]
})
});

//Gets all of the projects
app.get('/api/projects', function (req, res) {
  db.Project.find()
    .exec(function(err, projects) {
      if (err) { return console.log("error: " + err); }
      res.json(projects);
    });
});

//Gets one project
app.get('/api/projects/:id', function (req, res) {
  db.Project.findOne({_id: req.params.id}, function(err, data){
    res.json(data);
  });
});

//Creates new projects
app.post('/api/projects', function (req, res) {
  var newProject = new db.Project({
    name: req.body.name,
    description: req.body.description,
    url: req.body.url
  });
  newProject.save(function(err, project){
    if(err){
      return console.log("error: " + err);
    }
    console.log("saved ", project.name);
    res.json(project);
  });
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
