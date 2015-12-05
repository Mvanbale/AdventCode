module.exports = hasForbiddenStrings;

function hasForbiddenStrings(word, done) {
	if (word.indexOf('ab') != -1
		|| word.indexOf('cd') != -1
		|| word.indexOf('pq') != -1
		|| word.indexOf('xy') != -1) { done(null, true); return true; }
	else { done(null, false); return false; }

}