module.exports = function (data, done) {

	data = data.split("\n");
	data.pop();
	var i = 0;
	var commandStack = [];
	data.forEach(function (element) {
		i++;
		
		findCommand(element, function(result){
			var splitStatement = element.split("->");
			var variables = splitStatement[0].split(result);
			var targetVariable = splitStatement[1];
			
			console.log(result, "___",variables[0],"| WITH |",variables[1],"| ON {"+targetVariable+"}");
			var command ={operator:result, var1:variables[0], var2:variables[1], target:targetVariable};
			commandStack.push(command);
		})

	}, this);
	done(commandStack);
	return commandStack;
}


function findCommand(element, done) {
	var command = " ";
	if (/OR/g.test(element)) command = "OR";
	if (/NOT/g.test(element)) command = "NOT";
	if (/AND/g.test(element)) command = "AND";
	if (/LSHIFT/g.test(element)) command = "LSHIFT";
	if (/RSHIFT/g.test(element)) command = "RSHIFT";
	done(command);
	return command;
}

function findNumbers(element) {
	var results = "no numbers";
	results = element.match(/[0-9]+(\,[0-9]*)/g);
	return results;

}

// ([(o)])\w+ //selects command
// ([([^0-9,])\w+ //selects numbers