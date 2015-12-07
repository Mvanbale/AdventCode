// Make sure we got a filename on the command line.
if (process.argv.length < 3) {
    console.log('Usage:processor.js + inputfile');
    process.exit(1);
}
var commandParser = require('./commandParser');
// Read the file and print its contents.
var fs = require('fs'),
    filename = process.argv[2];
	
//make grid
var iMax = 1000;
var jMax = 1000;
var grid = new Array();

for (i = 0; i < iMax; i++) {
	grid[i] = new Array();
	for (j = 0; j < jMax; j++) {
		grid[i][j] = { "x": i, "y": j, "status": 0 };
	}
}	
	
	
fs.readFile(filename, 'utf8', function (err, data) {
    if (err) throw err;
commandParser(data, function(commandStack){
	commandStack.forEach(function(element) {
		changeLights(grid, element.firstPos, element.seccondPos, element.commandMode, function(){
		});
	}, this);
	
})
countLightsThatAreOn(grid);
});

function changeLights(grid, firstPos, seccondPos, commandMode ,done) {
	grid.forEach(function (position) {
		if(between(position[0].x ,firstPos.x, seccondPos.x)){
			position.forEach(function (innerPosition) {
				if (between(innerPosition.y, firstPos.y, seccondPos.y)) {
					switch (commandMode) {
						case "on":
							innerPosition.status = innerPosition.status+1
							break;
						case "off":
						if(innerPosition.status>0){
							innerPosition.status = innerPosition.status-1}
							break;
						case "toggle":
							innerPosition.status = innerPosition.status+2
							break;
					
						default:
							break;
					}
				}
			}, this)
		}}, this);
	done();
	}

function between(x, min, max) {
  return x >= min && x <= max;
}

function countLightsThatAreOn(grid){
	var numberOfLights = 0;
	grid.forEach(function(element) {
		element.forEach(function(element) {
			if(element.status >= 0) numberOfLights =  numberOfLights+element.status;
		}, this);
	}, this);
	console.log(numberOfLights);
}