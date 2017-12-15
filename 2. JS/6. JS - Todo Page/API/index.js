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

app.get('/', function(req, res){
    res.send("test");
});

app.listen(port, function (){
  console.log("App is running on port " + port);
});
