// Make sure we got a filename on the command line.
if (process.argv.length < 3) {
    console.log('Usage:processor.js + inputfile');
    process.exit(1);
}
var commandParser = require('./lineProcessor');
// Read the file and print its contents.
var fs = require('fs'),
    filename = process.argv[2];
var depth = 0;
fs.readFile(filename, 'utf8', function (err, data) {
    if (err) throw err;
	commandParser(data, function (commandStack) {
		var target;

		commandStack.forEach(function (element) {

			if (element.target != "" && isNaN(element.target)) {
				findNode(element.target, function (node) {

					if (!node) { target = makeNode(element.target) }
					if (node) { target = node; }

					findNode(element.var1, function (node) {
						if (element.var1 != "" && isNaN(element.var1)) {
							if (!node) { node = makeNode(element.var1) }
							node.addSendingTo(target);
							target.addReceivingFrom(node);

						}
						if (element.var2 != "" && isNaN(element.var2)) {
							findNode(element.var2, function (node) {

								if (!node) { node = makeNode(element.var2) }
								node.addSendingTo(target);
								target.addReceivingFrom(node);
							});
						}
					})

				});
			}



		}, this);

	})

	findNode("a", function (result) {
		result.spreadRootPulse(0, result);
	})

var foundNodes = (countNodesWithDepth(nodes));
	console.log(foundNodes.sort(function(a, b){
 return a.depth-b.depth
}));
console.log( foundNodes.length)
	// console.log("Running spreadrootpulse");
	// nodes.forEach(function (element) {
	// 	element.printStatusAndConnections();
	// }, this);
});

var nodes = [];


function makeNode(name) {
	var node = { name: name, value: 0, receivingFrom: [], sendingTo: [], depth: 0 };
	nodes.push(node);

	//functions
	node.printStatusAndConnections = function (node) {
		console.log("Content of : " + this.name);
		console.log("Depth : ", node.depth);
		this.receivingFrom.forEach(function (element) {
			console.log("Receiving from : " + element.name);

		}, this);
		this.sendingTo.forEach(function (element) {
			console.log("Sending to : " + element.name);

		}, this);
		console.log("-----------------------");
	};

	node.takeSignal = function (value) {
		this.value = value.toString(2);
	};

	node.setDepth = function (value, node) {
		node.depth = value;
		console.log("set value");
	}

	node.addReceivingFrom = function (value) {
		this.receivingFrom.push(value);
	};

	node.addSendingTo = function (value) {
		this.sendingTo.push(value);
	};
	node.spreadRootPulse = function (value, object) {
		findNode(object.name, function (result) {
			if (result) {
				if (result.receivingFrom.length > 0) {
					value = value + 1;
					result.setDepth(value, result);
					var nextNode = result.receivingFrom.splice(0, 1);
					nextNode[0].spreadRootPulse(value, nextNode[0]);
					object.spreadRootPulse(value,result);
				}
				else { result.setDepth(value, result); }
			}
		})


	}
		
		
	//console.log("rootpulse");
	//object.printStatusAndConnections();
	


	return node;
}

function findNode(name, done) {
	var i;
    for (i = 0; i < nodes.length; i++) {
        if (nodes[i].name === name) {
            done(nodes[i]);
			return nodes[i];
        }
    }
	done(false);
    return false;


}

function countNodesWithDepth(val) {
	return val.filter(function (input) {
		return input.depth != 0;
	});

}
