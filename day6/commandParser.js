module.exports = function (data, done) {

	data = data.split("\n");
	var commandStack = [];
	data.pop();
	data.forEach(function (element) {
		var commandWord = findCommand(element);
		var numbers = findNumbers(element);
		var firstPos = numbers[0].split(",");
		var seccondPos = numbers[1].split(",");
		commandStack.push({ firstPos: { x: firstPos[0], y: firstPos[1] }, seccondPos: { x: seccondPos[0], y: seccondPos[1] }, commandMode: commandWord })
	}, this);
	console.log(commandStack)
	done(commandStack);
	return commandStack;
}


function findCommand(element) {
	var command = "Not found";
	if (/toggle/.test(element)) command = "toggle";
	if (/on/.test(element)) command = "on";
	if (/off/.test(element)) command = "off";
	return command;
}

function findNumbers(element) {
	var results = element.match(/[0-9]+(\,[0-9]*)/g);
	return results;

}

// ([(o)])\w+ //selects command
// ([([^0-9,])\w+ //selects numbers