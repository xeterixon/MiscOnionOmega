'use strict';
var oled = require('./node-oled.js');
oled.Init().Clear();
oled.Cursor(0,0).Write("Hello").Cursor(1,0).Write("World").Execute();
