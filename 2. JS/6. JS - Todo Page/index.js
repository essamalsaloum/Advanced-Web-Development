var express = require('express')
    bodyParser = require("body-parser")
    app = express()
    port = process.env.PORT || 3000;


//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// define routes
var todoRoutes = require('./routes/todos');
app.use('/api/todos', todoRoutes);

//Define static content
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res){
    res.sendFile("index.html");
});

app.listen(port, function (){
  console.log("App is running on port " + port);
});
