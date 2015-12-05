	exports = function hasConsecutive(word) {
		var lastElement;
		word.split('').forEach(function (element) {
			if (element == lastElement) { return true; }
			lastElement = element;
		}, this);
	}