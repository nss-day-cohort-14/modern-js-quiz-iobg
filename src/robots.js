"use strict";
function Robot(){
	this.model=null;
	this.attackingNow=false;
	this.armor=0;
	this.damageBonus=0;
	this.evasion=0;
}

Robot.prototype.setHP=(min,max)=>{
		return Math.floor(Math.random() *(max-min) +min);

	};

function Biped(){
	this.type="Biped";
	this.armor=5;
}
Biped.prototype=new Robot();

function Quadruped(){
	this.type="Quadruped";
	this.damageBonus=2;
}
Quadruped.prototype=new Robot();

function Drone(){
	this.type="Drone";
	this.evasion=5;
}
Drone.prototype= new Robot();

//Bipeds

function Humanoid(name){
	this.HP= this.setHP(80,100);
	this.minDmg =8;
	this.maxDmg =12;
	this.name=name;
	this.model="Humanoid";

}
Humanoid.prototype=new Biped();

function Giant(name){
	this.HP= this.setHP(100,140);
	this.minDmg =2;
	this.maxDmg =15;
	this.name=name;
	this.model="Giant";

}
Giant.prototype= new Biped();

//Quadrupeds

function Wolf(name){
	this.HP= this.setHP(40,60);
	this.minDmg =10;
	this.maxDmg =16;
	this.name=name;
	this.model="Wolf";

}
Wolf.prototype= new Quadruped();

function Bear(name){
	this.HP= this.setHP(100,120);
	this.minDmg =2;
	this.maxDmg =17;
	this.name=name;
	this.model="Bear";

}
Bear.prototype= new Quadruped();

//Drones

function Helicopter(name){
	this.HP= this.setHP(20,30);
	this.minDmg =15;
	this.maxDmg =17;
	this.name=name;
	this.model="Helicopter";
}

Helicopter.prototype = new Drone();

function Plane(name){
	this.HP= this.setHP(30,50);
	this.minDmg =1;
	this.maxDmg =25;
	this.name=name;
	this.model="Plane";
}

Plane.prototype = new Drone();

module.exports={Humanoid,Giant,Wolf,Bear,Helicopter,Plane};

