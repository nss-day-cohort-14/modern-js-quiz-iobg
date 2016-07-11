"use strict";
const robots= require("./robots");
const weapons = require("./weapons");
const modifications=require("./modifications");
const calculations=require("./calculations");

let select1=$("#robot1");
let select2=$("#robot2");
let weapon1=$("#weapon1");
let weapon2=$("#weapon2");
let mod1=$("#mod1");
let mod2=$("#mod2");
let name1=$("#name1");
let name2=$("#name2");
let createBtn=$("#create");
let battleGround=$("#battleground");

for(let key in robots){
	select1.append(`<option value="${key}">${key}</option>`);
	select2.append(`<option value="${key}">${key}</option>`);
}
for(let key in weapons){
	weapon1.append(`<option value="${key}">${key}</option>`);
	weapon2.append(`<option value="${key}">${key}</option>`);
}
for(let key in modifications){
	mod1.append(`<option value="${key}">${key}</option>`);
	mod2.append(`<option value="${key}">${key}</option>`);
}


var createRobots= () =>{
	var robot1 = new robots[select1[0].value](name1[0].value);
	var robot2 = new robots[select2[0].value](name2[0].value);
	robot1.weapon= new weapons[weapon1[0].value]();
	robot2.weapon= new weapons[weapon2[0].value]();
	robot1.modification= new modifications[mod1[0].value]();
	robot2.modification= new modifications[mod2[0].value]();
	robot1.value=1;
	robot2.value=2;
	calculations.setRobots(robot1,robot2);
	
};
var display = (robot) =>{
	let toDOM="";
	toDOM+= `<div class="name"> Model: ${robot.model}</div>`;
	toDOM+= `<div class="name"> Type: ${robot.type}</div>`;
	toDOM+= `<div class="name"> Robot name: ${robot.name}</div>`;
	toDOM+= `<div class="hp"> HP: ${robot.HP}</div>`;
	toDOM+= `<div class="weapon"> Weapon: ${robot.weapon.name}</div>`;
	$(`#display${robot.value}`).html(toDOM);
	
	
};
var addAtkBtn = ()=>{
	battleGround.append(`<input type="button" id="attackBtn" value="Attack!">`);
};
var battleMessage=(attacker,defender,damageDone)=>{
	let message=(`${attacker.name} hit ${defender.name} for ${damageDone} damage!`);
	$("#battleText").html(message);

};


createBtn.click(createRobots);

module.exports={display,addAtkBtn,battleMessage};

