// 19.5: text theke 36 ta problem solve korte hobe

// 19_5-1 recap and practice variable , array Conditionals

// Loop
//varible = var , let , const 
var numbers = [1, 5, 96, 32, 85, 52, 9];
var number = numbers.slice(2, 6);
console.log(number);

var name = 'srity is learn js';
var out = name.includes('is');
console.log(out);

// 20-2 Declare a Function, call function, function vs loop

//declare function
function startFan(){
    console.log('stand up');
    console.log('switch');
    console.log('Press the switch');
}

// call the function
startFan();
startFan();
startFan();
//parameter
function bringSingara(money){
    console.log('mama singara den');
    console.log('eto taka disen', money);
}
//var taka = 30;
//bringSingara(taka);
bringSingara(30);
// 20-3 Add function parameter, handle multiple parameters

function add(num1, num2){
    console.log('going to add:', num1, num2);
}
add();

function sum(a, b, c, d, e){
    console.log(a, b, c, d, e);
    var sum = a + b + c + d + e;
    console.log(sum);
}
sum(23, 45, 98);

//20-4 Everything you need to know about return from a function

function add1(number1, number2){
    console.log(number1, number2);
    var sum1 = number1 + number2;
    console.log(sum1);
}
add1(45, 25);

//over