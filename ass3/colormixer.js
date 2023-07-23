const color1 = "red+blue"
const color2 = "blue+yellow"
const color3 = "yellow+red"
let mixed = "red+blue";

switch(mixed){
    case "red+blue" :
        console.log("purple")
        break;

    case "red+yellow":
        console.log("orange")
        break;
        
    case "blue+yellow":
        console.log("green")
        break;
        
    default :
       console.log("invalid color combination") 
       break;   
}