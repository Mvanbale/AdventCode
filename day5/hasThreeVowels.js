module.exports = hasThreeVowels;


function hasThreeVowels(word, done) {
	var count = 0;
	word.split('').forEach(function (element) {
		if (element === 'a' || element === 'e' || element === 'o' || element === 'u' || element === 'i') { count++; }
		if (count == 3) { 
			done(null, true);
			return true; 
			 }
	}, this);
	if (count < 3) { 
		done(null, false); 
		return false; }

}