/*1. Write a program of traffic control that accepts the traffic light displayed and prints the message. If the
traffic light is red print the vehicles must stop.*/

let trafficlight= 'orange'

if (trafficlight == 'red'){
    console.log('stop the vehical')
}
else if(trafficlight == 'orange'){
    console.log('vehical must wait')
}
else if(trafficlight == 'green'){
    console.log('you can go')
}
else{
    console.log("invalid traffic light")
}

/*2. Write a program to print the largest of 2 numbers.*/

let num1 = 20
let num2 = 30

if(num1 > num2){
    console.log("num1 is largest")
}
else{
    console.log("num2 is big")
}

/*3. Write a program that takes a number as input and outputs "Fizz" if it is divisible by 3, "Buzz" if it is divisible
by 5, and "FizzBuzz" if it is divisible by both 3 and 5. Note that any number can be passed and not restricted to
the numbers divisible by 3 or 5.*/

let num = 3

if (num % 5 ==0 && num% 3==0){
    console.log("fizzbuzz")
}
else if(num % 5 == 0){
    console.log("buzz")
}else if(num % 3 == 0){
    console.log("fizz")
}
else{
    console.log('invalid input')
}