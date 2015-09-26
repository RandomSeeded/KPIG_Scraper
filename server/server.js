var express = require('express');
var fs = require('fs');
var app = express();
var http = require('http');

http.get("http://www.kpig.com/playlist.htm", function(res) {
  var data;
  res.on('data', function(chunk) {
    data += chunk;
  });
  res.on('end', function() {
    console.log(data);
  });
});

/*http.request({
  url: 'http://www.kpig.com/playlist.htm'
}, function(res) {
  console.log('true');
});*/

