module.exports = hasThreeVowels;


function hasThreeVowels(word, done) {
	var count = 0;
console.log("Word: "+word);
	word.split('').forEach(function (element) {
		if (element === 'a' || element === 'e' || element === 'o' || element === 'u' || element === 'i') { count++; }
		if (count == 3) { 
			console.log("returned true"); 
			done(null, true);
			return true; 
			 }
		console.log("called, count at "+element);
	}, this);
	
	
	if (count < 3) { 
		done(null, false); 
		return false; }

}