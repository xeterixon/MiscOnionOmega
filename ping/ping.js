var request = require('request');
var oled = require('../node-oled/node-oled.js');
oled.Init().Clear();
//oled.Invert("on");



console.log(process.argv.length);

var args = process.argv.splice(2,process.argv.length -2);
console.log(args);
// Set the headers
var headers = {
    'User-Agent':       'XetPinger/0.0.1'
}
var row=0;
oled.Cursor(row,0).Write("Azure Always On-er").Execute();
row = row+1;
oled.Cursor(row,0).Write(args.length + " sites").Execute();
row = row+1;
for(i in args){
 
    // Configure the request
    var options = {
        url: args[i],
        method: 'GET',
        headers: headers
    }

  
  request(options, function (error, response, body) {
    console.log(this.host);
    if(!error){
        oled.Cursor(row,0).Write("Ping OK").Execute()
        //console.log(response.statusCode);
    }
    else
    {
        oled.Cursor(row,0).Write("Ping FAIL").Execute();   
    }
    row = row+1;
  });
}	
