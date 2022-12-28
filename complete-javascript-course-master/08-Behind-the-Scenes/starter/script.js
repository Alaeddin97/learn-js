'use strict';

/*
console.log(me);
console.log(job);
console.log(year);
var me='Alaa';
let job='engineer';
const year=1997;


console.log(addDecl(2,3));
console.log(addEx(2,3)); // cannot use before initialize it
console.log(addA4(2,3)); //hoisting declare var variable as undefined

function addDecl(a,b){
    return a+b;
}

const addEx=function(a,b){
    return a+b;
}

var addArrow=(a,b)=>a+b;
*/

// Exemples

// var is dangerous
/*if(!numProducts)deleteIfNonProducts();
var numProducts=10;// hoisting assign an undefined value to var variables when utilized before declared : see line 30
function deleteIfNonProducts(){
    console.log('Products deleted ..');
}*/














// this keyword
/*
console.log(this);

const calcAge=function(birthYear){
    console.log(2037-birthYear);
    console.log(this);
}
calcAge(1997);

const calcAgeArrow=(birthYear)=>{
    console.log(2037-birthYear);
    console.log(this);//get the this keyword of the outer scope : here window
}
calcAgeArrow(1997);

const Alaa={
    birthYear:1997,
    calcAge:function(){
        console.log(this);//
    }
}
Alaa.calcAge();// this point to the object that calls calcAge()


window.addEventListener('click',function(){
    console.log(this);// this points to window
})
*/




// Arrow function vs regular function
/*
const Alaa={
    birthYear:1997,
    //recommanded
    calcAge:function(){
        // console.log(this.hey);// undefined cos there is no hey property into window object
        console.log(2023-this.birthYear);
        const self=this;
        const isOld=function(){
            console.log(self);
            if(2023-self.birthYear>50) console.log('He is old')
        }
        isOld();
    },
    // got better avoid it
    greet:()=>{
        console.log(this);
    }
}
Alaa.calcAge();
*/

// arguments keyword
/*
const addExpr=function(a,b){
    console.log(arguments);
    return a+b;
}
addExpr(2,4);
addExpr(3,3,4,5);

const addArrow=(a,b)=>a+b;//can not use arguments keyword
*/

const me={
    name:'Alaa',
    age:25
}
const friend=me;
friend.age=26;
console.log(friend);
console.log(me);

const arr=[1,2];
arr[0]=5;//we can change a const object as long as we dont change the value in the stack
console.log(arr);