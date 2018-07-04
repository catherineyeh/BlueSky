var fs = require('fs');

fs.writeFile('file1.txt', 'What is the file size?', function(err){
    if (err) throw err;
    console.log('Saved!');
})
fs.writeFile('file2.html', 'This is a html file.', function(err){
    if (err) throw err;
    console.log('Saved!');
})
fs.writeFile('file3.css', 'This is a CSS file.', function(err){
    if (err) throw err;
    console.log('Saved!');
})