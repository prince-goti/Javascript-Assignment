/*1. Write a program that takes in a day of the week (e.g., Monday, Tuesday, etc.) and outputs the number of
days until the weekend.*/

let day = 'sunday'
let dayuntilweekend ;

switch (day){
    case 'monday':
    console.log('they are 5 days until the weekend')
    break;
    case 'tuesday':
    console.log('they are 4 days until the weekend')
    break;
    case 'wednesday':
    console.log('they are 3 days until the weekend')
    break;
    case 'thursday':
    console.log('they are 2 days until the weekend')
    break;
    case 'friday':
    console.log('they are 1 days until the weekend')
    break;
    case 'saturday':
    case 'sunday' :    
    console.log('they are 0 days until the weekend')
    break;
    default:
    dayuntilweekend = 'invalid day'
    break;
}

/*2. Write a program that takes in a number between 1 and 12 and outputs the corresponding month of the
year.*/

let number = 6;

switch(number){
    case 1:
        console.log("january")
        break;
    case 2:
        console.log("february")
        break  
        case 3:
        console.log("march")
        break   
        case 4:
        console.log("april")
        break   
        case 5:
        console.log("may")
        break   
        case 6:
        console.log("june")
        break   
        case 7:
        console.log("july")
        break   
        case 8:
        console.log("august")
        break   
        case 9:
        console.log("september")
        break   
        case 10:
        console.log("octomber")
        break  
        case 11:
        console.log("november")
        break   
        case 12:
        console.log("december")
        break    
        
        default:
            console.log("invalid number")
            break
}