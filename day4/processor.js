
var md5 = require('md5');


var n = 0;
    while (true) {
        // console.log(md5(buf + n));
        
        var generatedHash = md5("ckczppom"+n);
        // console.log(generatedHash.slice(0,5))
        // console.log(generatedHash);
        if(generatedHash.slice(0,8) == "00000000"){
            console.log("ckczppom"+n);
            console.log(generatedHash); break;}
        n++;
    }
 
