"use strict";
const robots= require("./robots");
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
	console.log(robot1);
	
};

createBtn.click(createRobots);

