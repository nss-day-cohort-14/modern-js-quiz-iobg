var weapons={};
var Weapon=()=>{
	this.minBonus=0;
	this.maxBonus=0;
	this.name=null;

}

weapons.SMG=()=>{
	this.minBonus=8;
	this.name="SMG";
}
weapons.SMG.prototype = new Weapon();

weapons.Flamethrower =()=>{
	this.minBonus=4;
	this.maxBonus=4;
	this.name="Flamethrower";
};
weapons.Flamethrower.prototype = new Weapon();

weapons.Sniper =()=>{
	this.maxBonus=8;
	this.name="Sniper";
}
weapons.Sniper.prototype = new Weapon();

weapons.Assault =()=>{
	this.minBonus=2;
	this.maxBonus=6;
	this.name="Assault Rifle";
}
weapons.Assault.prototype = new Weapon();

weapons.Sword=()=>{
	this.minBonus=6;
	this.maxBonus=2;
	this.name="Sword";
};
weapons.Sword.prototype=new Weapon();

weapons.Knife=()=>{
	this.minBonus=5;
	this.maxBonus=3;
	this.name="Knife";

}
weapons.Knife.prototype = new Weapon();

module.exports=weapons;
