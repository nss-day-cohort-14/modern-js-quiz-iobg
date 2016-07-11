"use strict";
var DOM = require("./DOMHandler");
let robot1;
let robot2;


var setRobots=(r1,r2)=>{
	DOM = require("./DOMHandler");
	robot1=r1;
	robot2=r2;
	robot1.attackingNow=true;
	DOM.display(robot1);
	DOM.display(robot2);
	DOM.addAtkBtn();
	$("#attackBtn").click(turnFinder);
};

var turnFinder=()=>{
	if(robot1.attackingNow){
		damageCalculation(robot1,robot2);
		robot1.attackingNow=false;
	}
	else{
		damageCalculation(robot2,robot1);
		robot1.attackingNow=true;
	}
};

var getRandomDamage=(robot)=>{
	var max = robot.maxDmg + robot.weapon.maxBonus;
	var min = robot.minDmg + robot.weapon.minBonus;
return Math.floor(Math.random()*(max - min +1)+ min);
};

var damageCalculation=(attacker,defender)=>{
	var damageDone = getRandomDamage(attacker) + attacker.modification.damageBonus;
	if(checkHit(defender)){
		defender.HP-=damageDone;
		DOM.battleMessage(attacker,defender,damageDone);
		DOM.display(defender);
	}
	else DOM.missMessage(attacker);

	if(defender.HP <=0){
		$("#battleground").html(`<div id="gameover"> GAME OVER ${attacker.name} wins!</div>`);
	}
};

var checkHit=(defender)=>{
	if(Math.random()*100 > defender.modification.evasion){
		return true;
	}
	else return false;
};


module.exports={setRobots};

