'use strict';
var oled = require('./node-oled.js');
oled.Init().Clear();
oled.Invert("on");
oled.Cursor(0,0).Write("Hello").Cursor(1,0).Write("World").Execute();
oled.Cursor(4,0).Write("Some more text").Execute();


