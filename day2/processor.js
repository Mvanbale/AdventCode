// Make sure we got a filename on the command line.
if (process.argv.length < 3) {
    console.log('Usage:processor.js + inputfile');
    process.exit(1);
}
// Read the file and print its contents.
var fs = require('fs'),
    filename = process.argv[2];
fs.readFile(filename, 'utf8', function (err, data) {
    if (err) throw err;
    findSurface(data);

});

function findSurface(input) {
    var splitInput = input.split("\n");
        splitInput.splice(-1,1)
    var totalSquareFeet = 0;
    var totalRibbonLength = 0;
    for (var i = 0, len = splitInput.length; i < len; i++) {
        var sides = splitInput[i].split('x');
        var height = sides[0]
        var width = sides[1];
        var length = sides[2]

        var sortedSides = sides.sort(sortNumber);

        totalSquareFeet = totalSquareFeet + (((2 * length) * width) + ((2 * width) * height) + ((2 * height) * length) + (sortedSides[0] * sortedSides[1]));
        totalRibbonLength = Number(totalRibbonLength) + calculateRibbon(sortedSides);
        console.log("Square feet of wrapping paper: " + totalSquareFeet);
        console.log("Feet of ribbon required: " + totalRibbonLength);
    }
}


function calculateRibbon(sides) {

sides = sides.map(Number);

    return sides[0] + sides[0] + sides[1] + sides[1] +( sides[0] * sides[1] * sides[2]);

}

function sortNumber(a, b) {
    return a - b;
}

