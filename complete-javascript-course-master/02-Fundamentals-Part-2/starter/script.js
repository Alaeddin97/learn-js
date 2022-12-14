 'use strict'; // help us with debugging errors

 /*
let hasDriversLicense=false;
const passTest=true;

if(passTest) hasDriversLicense=true;
if (hasDriversLicense) console.log('I can drive YOHO');
*/

// Functions: 
/*
function logger(){
    console.log('My name is Alaeddine');
}

// calling / running // invoking function
logger();

function fruitProcessor(apples,oranges){
    console.log(apples,oranges);
    const juice=`Juice with ${apples} apples and 
    ${oranges} oranges`;
    return juice;
}

fruitProcessor(2,4);
*/




// Declaration vs Expression
/*
// Function Declaration 
const ageAlaa=calcAge(1997); // we can call a function declaration before define it
console.log(ageAlaa);

function calcAge(birthYear){
    return 2022-birthYear;
}
const ageYassoun=calcAge(2000);


// Function Expression
// const ageDonia=calcAge2(1995);// We can not call it before define it

const calcAge2=function(birthYear){
    return 2022-birthYear;
}
const ageDonia=calcAge2(1995);
console.log(ageAlaa,ageDonia,ageYassoun)
*/




//Arrow function
/*
const calAge3=birthYear=>2022-birthYear;
const age=calAge3(1997);
console.log(age);

const yearsToRetire=(birthYear,firstName)=>{
    const age=2022-birthYear;
    const retirement=65-age;
    return `${firstName} retires in ${retirement}`;
}
console.log(yearsToRetire(1997,'Alaa'));
console.log(yearsToRetire(1988,'Akrem'));
*/




// Arrays
/*
const friends=['Pierre','Anthony','Yinghui'];
console.log(friends);

//const years=new Array(2022,2021,2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);

friends[2]='Alex';
console.log(friends);

const personalData=['Alaa','Garraoui',2022-1997,'programmer',friends];
console.log(personalData);

//Exercise
const calcAge=function(birthYear){
    return 2022-birthYear;
}
const years=[1990,1997,1995,1988,2000];

const age1=calcAge(years[0]);
console.log(age1);
*/



// Array methods
/*
const friends=['Pierre','Anthony','Yinghui'];
console.log(friends);
const newLength=friends.push('Saliou');
console.log(friends);
console.log(newLength);

friends.unshift('Hssan');
console.log(friends);

friends.pop();
friends.pop();
console.log(friends);
friends.shift(0);
console.log(friends);

console.log(friends.indexOf('Anthony'));
console.log(friends.indexOf('Pierre')); //-1 if not exist

console.log(friends.includes('Alaa'));
*/



//  Object
/*
const jonas={
    firstName:'lionel',
    lastName:'messi',
    birthYear:1987,
    job:'football player',
    friends:['depaul','demaria','aguero'],
    
    // expression function
    calcAge:function(){
        this.age=2022-this.birthYear;
        console.log(this);
        return this.age;
    }
}

jonas.calcAge()

console.log(jonas.age);
*/



// FOR LOOP
/*
const jonas={
    firstName:'lionel',
    lastName:'messi',
    birthYear:1987,
    job:'football player',
    friends:['depaul','demaria','aguero','alvarez','swarez',1,2,3,'jordi'],
    
    // expression function
    calcAge:function(){
        this.age=2022-this.birthYear;
        console.log(this);
        return this.age;
    }
}

for(let i=0;i<jonas.friends.length;i++){
   if(typeof jonas.friends[i]!=='string') continue;
    console.log(jonas.friends[i]);
}

console.log('...............................................')

for(let i=0;i<jonas.friends.length;i++){
    if(typeof jonas.friends[i]!=='string') break;
     console.log(jonas.friends[i]);
 }
*/



//WHILE LOOP

let dice=Math.trunc(Math.random()*6)+1;
console.log(`dice=${dice}`);

while(dice!==6){
    console.log(`You rolled a ${dice}`)
     dice=Math.trunc (Math.random()*6)+1;
     console.log(`dice=${dice}`);
}













