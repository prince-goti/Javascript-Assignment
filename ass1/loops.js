/*1. Write a program that generates the multiplication table in the textbook format for a given number.*/

let num = 5

for(let i = 1; i <= 10; i++){
    console.log(`${num} * ${i} = ${num * i}`)
}

/*2. Write a program that prints all the positive even numbers till the number specified.*/

let number = 10

for (let i = 1 ; i <= number; i++){
    if( i % 2 == 0){
    console.log(i)
    }
}

