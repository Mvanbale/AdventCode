// Make sure we got a filename on the command line.
if (process.argv.length < 3) {
    console.log('Usage:processor.js + inputfile');
    process.exit(1);
}
var commandParser = require('./lineProcessor');
// Read the file and print its contents.
var fs = require('fs'),
    filename = process.argv[2];

fs.readFile(filename, 'utf8', function (err, data) {
    if (err) throw err;
	commandParser(data, function (commandStack) {
		commandStack.forEach(function (element) {
console.log(element);
		}, this);

	})

});

var nodes = [];


function makeNode() {
	var node = { value: 0, senders: [], step: 0 };

	node.takeSignal = function (value) {
		this.value = value.toString(2);
	};

	node.addSender = function (value) {
		this.senders.push(value);
	};
	node.spreadRootPulse = function (value) {
		this.step = value;
		for (var index = 0; index < this.senders.length; index++) {
			var element = this.senders[index];
			element.spreadRootPulse(value + 1);
		}
	};
	nodes.push(node);
	return node;
}
