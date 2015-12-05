// Make sure we got a filename on the command line.
if (process.argv.length < 3) {
    console.log('Usage:processor.js + inputfile');
    process.exit(1);
}
//vars &
//construction of needed parts
var listOfCoordinates = [];
listOfCoordinates.push(x + ',' + y);
var x = 0;
var y = 0;

// Read the file
var fs = require('fs'),
    filename = process.argv[2];
fs.readFile(filename, 'utf8', function (err, data) {
    if (err) throw err;
    var splitData = data.split('')
    
    //do processing here
    splitData.forEach(function (element) {

        switch (element) {
            case "^":
                y++;
                break;

            case ">":
                x++
                break;

            case "<":
                x--;
                break;

            case "v":
                y--;
                break;

            default:

                break;
        }
        if (listOfCoordinates.some(function (element) {
            return element == x + ',' + y
        })) {
            return;
        } else {
            listOfCoordinates.push(x + ',' + y);
        }
        return;
    }, this);
    console.log(listOfCoordinates.length);
});