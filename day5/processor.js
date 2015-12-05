var noForbiddenStrings = require('./forbiddenStrings.js');
var hasThreeVowels = require('./hasThreeVowels.js');
var hasConsecutive = require('./hasConsecutive.js');

// Make sure we got a filename on the command line.
if (process.argv.length < 3) {
    console.log('Usage:processor.js + inputfile');
    process.exit(1);
}

// Read the file and split the content by character
var fs = require('fs'),
    filename = process.argv[2];

fs.readFile(filename, 'utf8', function (err, data) {
    input = data.split("\r").map(function (element) {
		return element.slice(1, -1);
	})

	input.forEach(function (element) {
		console.log(element);
		console.log("Three vowels:"+hasThreeVowels(element));
		console.log("consec"+ hasConsecutive(element));
		console.log("forbidden"+noForbiddenStrings(element));

	}, this);
});




