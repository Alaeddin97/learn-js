/*
//let js='amazing';
//if(js==='amazing') alert('JS is FUN');
//console.log('Jonas');
let firstName='Jonas';
console.log('FirstName: '+firstName);
*/


// VARIABLE NAME CONVENTIONS
/*
// let 2name='Alex'; compile error
let $name='Alex'; // it is okey
let _name='Alex'; // it is okey
//let Person='jonas'; // should not do it : convention
let PI=3.14;

let myFistJob='programmer';//descriptif: convention
let mySecondJob='professor';// descriptif: convention

let job1='programmer'; // should not do that
*/



// TYPES: 1. JS dynamically typing values, 2. in JS values haves types not variables
/**
 * 1. number
 * 2. string
 * 3. boolean
 * 4. undefined
 * 5. null
 * 6. symbols
 
let isJavascriptFun=true;
console.log('isJavascriptFun: '+isJavascriptFun)

console.log('type of isJavascriptFun: '+typeof isJavascriptFun)
console.log('typeof true: ' +typeof(true))
console.log("typeof 'true': " +typeof('true'))
console.log('typeof 25: ' +typeof(25))

isJavascriptFun='Yes!';
console.log('type of isJavascriptFun: '+typeof isJavascriptFun)

let year;

console.log(year);
console.log('typeof year is '+year) // empty variable is of type undefined

console.log(null)
console.log('typeof null: '+ typeof null)
*/

// DECLARATION : let, var , const
/*
let age=30;
age=31;

const birthYear=1997;
//birthYear=1998; immutable
// const job; //must be initialized

var job='programmer';
job='teacher';
*/




// OPERATORS: 
/*
const currentYear=2022;
const ageJonas=currentYear-1991;
const ageAla=currentYear-1997;
console.log(ageJonas)
console.log(ageAla)

console.log(ageJonas*2,ageJonas/10,2**3);




// assignment operators
let x=10+2;
console.log(x);
x+=10;
console.log(x);
x*=2;
console.log(x);
x--;
console.log(x);
x++;
console.log(x);
console.log(++x);

// comparison operators
console.log(ageAla>30);
const isJonasAdult=ageJonas>18;
console.log(isJonasAdult)
*/

// OPERATORS PRECEDENCE
/*
const currentYear=2022;
const ageJonas=currentYear-1991;
const ageAla=currentYear-1997;
console.log(currentYear-1991>currentYear-1997) // addition and subtraction have higher precedence than comparative operator
*/



// Strings and Template literals
/*
const firstName='Jonas';
const year=2022;
const birthYear=1997;
const job='programmer'
const jonas=`I'm ${firstName}, a ${(year-birthYear)} years old ${job}`;
console.log(jonas);

console.log('String with \n\
multiple \n\
lines')

console.log(`String with 
multiple lines 
with back ticks`)
*/



//if else statement
/*
const age=17;
if(age>=18){
    console.log('Sarah can start dirving license 🚗')
}else{
    const yearsLeft=18-age;
    console.log(`Sarah is too young. 
    Wait another ${yearsLeft} year(s) :)`)
}
*/

//  TYPE CONVERSION VS TYPE COERCION

// type conversion
/*
const inputYear='1997';
console.log(Number(inputYear)+25); // conversion from string to number
console.log(inputYear+25);//concatenation
console.log(+inputYear+25);//conversion

console.log(Number('jonas')); // Not a Number : NAN
console.log(typeof NaN); // number 

console.log(String(25)); //'23'

// type coercion
console.log('I am '+25+'years old'); // number converted to string automatically: coercion
console.log('23'-'10'-3); // 10: - trigger the other way around conversion string ->number
console.log(20/'2'); // same as minus
*/


// Falsy and Truthy values
// 5 falsy values: 0,'',undefined,null,NaN
/*
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(NaN));
console.log(Boolean('jonas')); // true

const money=10;
if(money){
    console.log("Don't spend it all ;)")
}else{
    console.log('You should get a job')
}

let height;//undefined
if(height){
    console.log('YAY! Height is defined');
}else{
    console.log('Height is UNDEFINED');
}
*/

// Equality operator

//const age=18;
// if(age===18) console.log('You just become adult :D (strict)');

// if(age=='18') console.log('You just become adult :D (loose)');

// if(age===('19'-1)) console.log('You just become an adult :D');

// if(age===('17'+1)) console.log('You just become an adult :D');

/*
const favourite=prompt('What is your favourite number?');
console.log(favourite);
console.log(typeof favourite);

if(favourite===23){
    console.log('Cool !');
    console.log(typeof favourite);

}else{
    console.log('Not Cool !');
    console.log(typeof favourite);
}
*/

// Boolean logic
/*
const hasDriversLicense=false;
const hasGoodVision=false;
const isTired=true;
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if(hasDriversLicense && hasGoodVision && !isTired){
    console.log("Sarah can drive !");
}else if(!hasDriversLicense || !hasGoodVision || isTired){
    console.log("Someone else should drive !")
}
*/

// switch statement
/*const day='monday';
switch(day){
    case 'monday':
        console.log('Monday is the hardest day of the week');
        console.log('Monday sometimes is great !');
        break; // crucial
    case 'tuesday':
        console.log('Tuesday is Less hard than monday');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Thurday is fun ');
        break;
    case 'friday':
        console.log('Friday is my favourite day');
        break;
}
*/
// Statement vs Expression
// expression produce value 
// statement is not there to produce a value



// Ternary Operator

const age=25;
age>=18?console.log('I can vote 😊'):
console.log('I stay at home 😭');

const plan=age>=18?'go to vote':'stay at home';
//console.log(plan);

console.log(`Today I'll ${age>=18?' go to vote':' stay at home'}`);