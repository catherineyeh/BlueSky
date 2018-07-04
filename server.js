var http = require('http');

http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Module 0');
}).listen(8080); 

var fs = require('fs');
var plotly = require('plotly')("catherineyeh","kaVTiq9Rv4vVy6pPyrkn");

const stats1 = fs.statSync("file1.txt");
const fileSizeInBytes1 = stats1.size;
console.log(fileSizeInBytes1);

const stats2 = fs.statSync("file2.html");
const fileSizeInBytes2 = stats2.size;
console.log(fileSizeInBytes2);

const stats3 = fs.statSync("file3.css");
const fileSizeInBytes3 = stats3.size;
console.log(fileSizeInBytes3);

var fileSizeArray = [fileSizeInBytes1, fileSizeInBytes2, fileSizeInBytes3];
console.log(fileSizeArray);

var fileSizeData = [{x:[1,2,3], y:[fileSizeInBytes1,fileSizeInBytes2,fileSizeInBytes3], type: 'bar'}];
var layout = {fileopt: "overwrite", filename: "FileSize Histogram"};
plotly.plot(fileSizeData, layout, function(err, msg){
    if (err) return console.log(err);
    console.log(msg);
});

