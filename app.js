var fs = require('fs');





// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');

// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\
app.get('/:filename', function(req, res){
	fs.readFile('req.params.filename', function(err, body){
		body = req.params.filename
	})
	res.header('Content-Type', 'text/html')
 	res.send(body)
})

// fs.readFile('req.params.filename', function(err, data){
// 	app.get('/:filename', function(req, res){
//   		res.header('Content-Type', 'text/html')
//  		res.send(data)
// 	})
// });


// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})



