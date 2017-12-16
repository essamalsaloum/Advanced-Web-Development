var express = require('express')
    app = express();

//Define port
var port = 3000;

//define routes
var api = require('./routes/api');
app.use('/api', api);



app.listen(port, () => console.log("Server on: " + port));
