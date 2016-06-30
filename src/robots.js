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

