(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
var robots = require("./robots");

},{"./robots":2}],2:[function(require,module,exports){
"use strict";
function Robot(){


}

function Biped(){

}
Biped.prototype=new Robot();

function Quadruped(){

}
Quadruped.prototype=new Robot();

function Drone(){

}
Drone.prototype= new Robot();

//Bipeds

function Humanoid(){

}
Humanoid.prototype=new Biped();

function Giant(){

}
Giant.prototype= new Biped();

//Quadrupeds

function Wolf(){

}
Wolf.prototype= new Quadruped();

function Bear(){

}
Bear.prototype= new Quadruped();

//Drones

function Helicopter(){

}
Helicopter.prototype = new Drone();

function Plane(){

}
Plane.prototype = new Drone();


},{}]},{},[1])


//# sourceMappingURL=bundle.js.map
