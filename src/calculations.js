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
return Math.floor(Math.random()*(robot.maxDmg-robot.minDmg +1)+robot.minDmg);
};

var damageCalculation=(attacker,defender)=>{
	var damageDone = getRandomDamage(attacker);
	defender.HP-=damageDone;
	DOM.battleMessage(attacker,defender,damageDone);
	DOM.display(defender);
	if(defender.HP <=0){
		$("#battleground").html(`<div id="gameover"> GAME OVER ${attacker.name} wins!</div>`);
	}
};


module.exports={setRobots};

