'use strict';

var ip = require('./getip.js');
var exec = require('child_process').execSync;
exec("oled-exp -c");
var r = 0;
exec("oled-exp -i");
exec("oled-exp cursor "+r+",0");
exec("oled-exp write 'IP Address'");
r = r+1;
ip.getIP(function(name, ip){
	exec("oled-exp cursor "+r+",0");
	exec("oled-exp write "+name+":"+ip);
	r = r+1;
//	console.log(a);
})