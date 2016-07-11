"use strict";
var modifications={};
var Modification=function(){
	this.evasion=0;
	this.HPBonus=0;
	this.damageBonus=0;
};

modifications.Armor=function(){
	this.HPBonus=20;
};

modifications.Armor.prototype = new Modification();

modifications.Camoflage=function(){
	this.evasion=10;
};

modifications.Camoflage.prototype= new Modification();

modifications.RazorWire=function(){
	this.damageBonus=5;
};

modifications.RazorWire.prototype= new Modification();

modifications.ThornArmor=function(){
	this.HPbonus=10;
	this.damageBonus=2;
};

modifications.ThornArmor.prototype=new Modification();

modifications.Robe=function(){
	this.evasion=5;
	this.HPBonus=10;
};

modifications.Robe.prototype=new Modification();

modifications.Goggles=function(){
	this.evasion=5;
	this.damageBonus=2;
};

modifications.Goggles.prototype=new Modification();

module.exports=modifications;