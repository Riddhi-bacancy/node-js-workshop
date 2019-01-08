var fs = require('fs')
fs.readFile(process.argv[2],function(err,content){
	if(err){ 
		console.log(err)
	}
	else{
		var str = content.toString();
		var str1 = str.split('\n');
		console.log(str1.length-1);
	}

})
