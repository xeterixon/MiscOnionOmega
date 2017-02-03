var request = require('request');
console.log(process.argv.length);

var args = process.argv.splice(2,process.argv.length -2);
console.log(args);
// Set the headers
var headers = {
    'User-Agent':       'XetPinger/0.0.1'
}
for(i in args){
    // Configure the request
    console.log(args[i]);
    var options = {
        url: args[i],
        method: 'GET',
        headers: headers
    }


  request(options, function (error, response, body) {
    //console.log(error);
    if(!error){
        console.log(response.statusCode);
    }
  });
}	
