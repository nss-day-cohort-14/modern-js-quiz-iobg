"use strict";
var modifications={};
var Modification=()=>{
	this.evasion=0;
	this.HPBonus=0;
	this.damageBonus=0;
};

modifications.Armor=()=>{
	this.HPBonus=20;
};

modifications.Armor.prototype = new Modification();

modifications.Camoflage=()=>{
	this.evasion=10;
};

modifications.Camoflage.prototype= new Modification();

modifications.RazorWire=()=>{
	this.damageBonus=5;
};

modifications.RazorWire.prototype= new Modification();

modifications.ThornArmor=()=>{
	this.HPbonus=10;
	this.damageBonus=2;
};

modifications.thornArmor.prototype=new Modification();

modifications.Robe=()=>{
	this.evasion=5;
	this.HPBonus=10;
};

modifications.Robe.prototype=new Modification();

modifications.Goggles=()=>{
	this.evasion=5;
	this.damageBonus=2;
};

modifications.Goggles.prototype=new Modification();

module.exports=modifications;