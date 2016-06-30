"use strict";

let robot1;
let robot2;


var setRobots=(r1,r2)=>{
const display = require("./DOMHandler");
robot1=r1;
robot2=r2;
display(r1);
display(r2);
};




module.exports={setRobots};

