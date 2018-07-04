const fs = require("fs");

var plotly = require('plotly')("catherineyeh","kaVTiq9Rv4vVy6pPyrkn");
var x = [];

for (var i = 0; i < 500; i ++) {
	x[i] = Math.random();
}

require('plotly')("catherineyeh", "o4VZqz234rBt5Sk4N6Uv");

var data = [
  {
    x: x,
    type: "histogram"
  }
];
var graphOptions = {filename: "basic-histogram", fileopt: "overwrite"};
plotly.plot(data, graphOptions, function (err, msg) {
    console.log(msg);
});

