	exports = function noForbiddenStrings(word) {
		if (word.indexOf('ab') != -1 && word.indexOf('cd') != -1 && word.indexOf('pq') != -1 && word.indexOf('xy') != -1) { return true; }
		return false;

	}