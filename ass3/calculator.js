const num1 = 4
const num2 = 2
let operator = '+'

switch (operator){
    case '+' :
        console.log(num1 + num2)
        break;

    case '-':
        console.log(num1-num2)
        break;

    case '*':
        console.log(num1*num2)
        break;
        
    case '/':
        console.log(num1/num2)  
        break;  

    default:
        console.log('invalid operator')  
        break;  

}