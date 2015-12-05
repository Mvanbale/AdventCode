module.exports = hasConsecutive;



function hasConsecutive(word, done) {
	var found = false;
	var lastElement;
	word.split('').forEach(function (element) {
		if (element == lastElement) { found = true; 
			return true; }
		lastElement = element;
	}, this);
	!found ? done(null, false): done(null, true);
}