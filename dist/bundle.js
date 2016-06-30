(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
const robots= require("./robots");
const calculations=require("./calculations");
let select1=$("#robot1");
let select2=$("#robot2");
let name1=$("#name1");
let name2=$("#name2");
let createBtn=$("#create");

for(let key in robots){
	select1.append(`<option value="${key}">${key}</option>`);
	select2.append(`<option value="${key}">${key}</option>`);
}


var createRobots= () =>{
	var robot1 = new robots[select1[0].value](name1[0].value);
	var robot2 = new robots[select2[0].value](name2[0].value);
	calculations.setRobots(robot1,robot2);
	
};

createBtn.click(createRobots);



},{"./calculations":3,"./robots":4}],2:[function(require,module,exports){
"use strict";
const robots=require("./DOMHandler");
const calculations=require("./calculations");



},{"./DOMHandler":1,"./calculations":3}],3:[function(require,module,exports){
"use strict";
let robot1;
let robot2;

var setRobots=(r1,r2)=>{
robot1=r1;
robot2=r2;
console.log(robot1,robot2);
};




module.exports={setRobots};


},{}],4:[function(require,module,exports){
"use strict";
function Robot(){
	this.broken=false;

	this.determineDamage=(min,max)=>{
		return Math.floor(Math.random() *(max-min) +min);

	};
	this.setHP=(min,max)=>{
		return Math.floor(Math.random() *(max-min) +min);

	};
}

function Biped(){
	this.armored=true;
}
Biped.prototype=new Robot();

function Quadruped(){
	this.agile=true;
}
Quadruped.prototype=new Robot();

function Drone(){
	this.flying=true;
}
Drone.prototype= new Robot();

//Bipeds

function Humanoid(name){
	this.HP= this.setHP(80,100);
	this.minDmg =8;
	this.maxDmg =12;
	this.name=name;

}
Humanoid.prototype=new Biped();

function Giant(name){
	this.HP= this.setHP(100,140);
	this.minDmg =2;
	this.maxDmg =15;
	this.name=name;

}
Giant.prototype= new Biped();

//Quadrupeds

function Wolf(name){
	this.HP= this.setHP(40,60);
	this.minDmg =10;
	this.maxDmg =16;
	this.name=name;

}
Wolf.prototype= new Quadruped();

function Bear(name){
	this.HP= this.setHP(100,120);
	this.minDmg =2;
	this.maxDmg =17;
	this.name=name;

}
Bear.prototype= new Quadruped();

//Drones

function Helicopter(name){
	this.HP= this.setHP(20,30);
	this.minDmg =15;
	this.maxDmg =17;
	this.name=name;

}

Helicopter.prototype = new Drone();

function Plane(name){
	this.HP= this.setHP(30,50);
	this.minDmg =1;
	this.maxDmg =25;
	this.name=name;

}

Plane.prototype = new Drone();

module.exports={Humanoid,Giant,Wolf,Bear,Helicopter,Plane};


},{}]},{},[2])


//# sourceMappingURL=bundle.js.map
