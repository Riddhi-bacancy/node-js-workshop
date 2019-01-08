var fs= require('fs');
fs.readdir(process.argv[2],function(err,files)
{   

	if(err){
		console.log(err);
	}
	else{
        //console.log(files);
		files.forEach(function(value) {
		if(value.includes('.'+process.argv[3]))
		{
             console.log(value);
        }   

		});
	}
});