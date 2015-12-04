var md5 = require('md5');
var n = 0;
    while (true) {        
        var generatedHash = md5("ckczppom"+n);
        if(generatedHash.slice(0,5) == "00000"){
            console.log("ckczppom"+n);
            console.log(generatedHash); break;}
        n++;
    }
 
