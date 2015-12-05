// Make sure we got a filename on the command line.
if (process.argv.length < 3) {
    console.log('Usage:processor.js + inputfile');
    process.exit(1);
}
//construction of needed parts
var RobotDoingTheWork = true;
var listOfCoordinates = [];
listOfCoordinates.push('0,0'); //starting position always gets visited. so just shoving that in there.
var coord; //pointer we can change so robot and santa can take turns using the relevant functions and switch.
var roboCoords = {
    x: 0,
    y: 0
}
var santaCoords = {
    x: 0,
    y: 0
}

// Read the file and split the content by character
var fs = require('fs'),
    filename = process.argv[2];
fs.readFile(filename, 'utf8', function (err, data) {
    if (err) throw err;
    var splitData = data.split('')

    //we process the instructions here
    splitData.forEach(function (element) {
        changeActor();//here we change from robot to santa and back again.
        switch (element) {
        case "^":
            coord.y++;
            break;

        case ">":
            coord.x++
                break;

        case "<":
            coord.x--;
            break;

        case "v":
            coord.y--;
            break;

        default:

            break;
        }
        if (listOfCoordinates.some(function (element) { //checks if w've already visited the coordinate.
                return element == coord.x + ',' + coord.y
            })) {
            return;
        } else {
            listOfCoordinates.push(coord.x + ',' + coord.y);
        }
        return;
    }, this);
    console.log(listOfCoordinates.length);
});



function changeActor() {
    if (RobotDoingTheWork) {
        coord = roboCoords, RobotDoingTheWork = !RobotDoingTheWork;
    } else {
        coord = santaCoords, RobotDoingTheWork = !RobotDoingTheWork;
    }
}