module.exports = (function()
{
	'use strict';
	var exec = require('child_process').execSync;
	class OledExp
	{
		constructor()
		{
			this._commands = [];
		}
		_addCommand(cmd)
		{
			console.log(cmd);
			this._commands.push(cmd);
			return this;
		}
		_runCommand()
		{
			try{
				exec("oled-exp " + this._commands.join(' '));
			}
			catch(err)
			{
				console.log("oled-dgb "+ this._commands.join(' '));
			}
		}
		Write(str)
		{
			return this._addCommand("write "+str);
		}
		Clear()
		{
			return this._addCommand("-c");
		}
		Dim(on)
		{
			return this._addCommand("dim "  + ((on === "on")? "on" : "off"));
		}
		Cursor(x,y)
		{
			return this._addCommand("setCursor " + [x,y].join(","));
		}
		Init()
		{
			return this._addCommand("-i");
		}
		Execute()
		{
			this._runCommand();
			this._commands = [];
		}
	}
	return new OledExp();
})();
/*

function Oled()
{
	class OledExp
	{

	}
	var command = function(cmd,params)
	{
		var c = cmd;
		if(params === undefined)
		{
			c + " " + params;
		}
		exec("oled-exp " +c);
	}
	this.Init = function()
	{
		command("-i");
	}
	this.SetCursor = function(x,y)
	{
		command("cursor",x+","+y);
	}
	this.Clear = function()
	{
		command("-c");
	}
	this.Write = function(str)
	{

	}
}
module.exports = Oled;
*/