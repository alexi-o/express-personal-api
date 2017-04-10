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

app.get('/', function (req, res) {
  res.sendFile('view.index.html', { root : __dirname});
});


/*
 * JSON API Endpoints
 */

app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    woops_i_has_forgot_to_document_all_my_endpoints: true, // CHANGE ME ;)
    message: "Welcome to Alexi's first api! Here's what you need to know!",
    documentation_url: "https://github.com/alexi-o/express-personal-api", 
    base_url: "https://mighty-basin-46898.herokuapp.com", 
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Data about me"}, 
      {method: "POST", path: "/api/projects", description: "E.g. Create a new project"}
    ]
  })
});

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

app.get('/api/projects', function (req, res) {
  db.Project.find().populate('projects')
    .exec(function(err, projects) {
      if (err) { return console.log("index error: " + err); }
      res.json(projects);
    })
})

app.get('/api/projects', function (req, res) {
  console.log('projects index');
  res.json(projects);
})

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
