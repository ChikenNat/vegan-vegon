var express = require('express');
var app = express();
var route = require('./route.js');
var bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route);

app.use(express.static(__dirname + '/public',{ redirect : false }));

var server = app.listen(3000, function () {
    var port = server.address().port;
      var address = server.address().address;
  
        console.log('App listening at port:', address + port);
  });
 
// Add items to the card //
(function(){

const cartBtn = document.querySelectorAll('.store-item-icon')

})();


//Testimonial //

var flkty = new Flickity( '.main-gallery', {
  cellAlign: 'left',
  contain: true,
  wrapAround: true,
  prevNextButtons: false,
  autoPlay: 5000
  });

