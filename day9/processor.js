// Make sure we got a filename on the command line.
if (process.argv.length < 3) {
    console.log('Usage:processor.js + inputfile');
    process.exit(1);
}
var perm = require('array-permutation');
// Read the file and split the content by character
var fs = require('fs'),
    filename = process.argv[2];

fs.readFile(filename, 'utf8', function (err, data) {
	data = data.split('\n');
	data.splice(-1, 1)
	var locationData = [];
	while (data.length > 0) {
		var lineData = data[0].split(" ");
		var name = lineData[0];
		var to = lineData[2];
		var dist = lineData[4];
		locationData.push({ name: name, to: to, distance: dist })


		data.splice(0, 1);
	}	

	
	var iter = perm(returnLocations(locationData));
	for (var p of iter) {
		processList(locationData, p);
}
});


	
	var distances = []
function processList(locationData, list){
	var totalDistance = 0;
	var from;
	for (var index = 0; index <= list.length+1; index++) {
		var element = list[index];
		if (from){
		returnDistances(locationData, element, from, function(distance){
			totalDistance = +totalDistance + +distance;
			from = element;
		});
		}else{from = element;}
		
		
	}
	from = null
	distances.push(totalDistance);
	console.log(Math.max.apply(null, distances))
}


function returnLocations(locationData) {
	var count = 0;
	var locations = [];
	for (var index = 0; index < locationData.length; index++) {
		var location = locationData[index];
		if (locations.indexOf(location.name) == -1) {
			count++;
			locations.push(location.name);
		}
		if(locations.indexOf(location.to) == -1){
			locations.push(location.to);}
	}
	return locations;

}

function returnDistances(locationData,from, to, callback){

locationData.forEach(function(location) {
			if((location.name === from|| location.name ===to )&& (location.to === to|| location.to ===from)){
			callback(location.distance);}
}, this);
	
}


