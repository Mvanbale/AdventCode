// Make sure we got a filename on the command line.
if (process.argv.length < 3) {
  console.log('Usage: node ' + process.argv[1] + ' FILENAME');
  process.exit(1);
}
// Read the file and print its contents.
var fs = require('fs')
  , filename = process.argv[2];
fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
 findFloor(data);
});

function findFloor(input){
	var floor = 0;
	var characterCount = 0;
	var found = false;
	for (var i = 0, len = input.length; i < len; i++) {
		characterCount++;
		
      if(input[i] == "("){floor++;};
	  if (input[i]==")") {
		  floor--;
	  }
	  if(floor<0 &&!found){
		  found = !found;
		  console.log("Character first to be lower than 0:"+characterCount) 
		  }
}
console.log(floor);
	
}