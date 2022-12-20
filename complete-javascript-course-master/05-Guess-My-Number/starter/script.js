'use strict';

let guess = Math.trunc(Math.random() * 20)+1;
let score = +document.getElementById('score').innerText;
let highScore = +document.getElementById('highscore').innerText;


function onCheck() {
  const x = document.getElementById('guess').value;
  if (+x < guess) {
    document.querySelector('#message').innerText = 'Too low'; // that works
    // console.log( document.querySelector('#message').innerText);
    --score;
    document.getElementById('score').innerText = score;
  } else if (+x > guess) {
    document.getElementById('message').innerText = 'Too high';
    --score;  
    document.getElementById('score').innerText = score;
  } else {
    document.getElementById('message').innerText = 'Yohoo! good guess !💪';
    highScore= score>highScore?score:highScore;
    document.getElementById('highscore').innerText = highScore;
    document.getElementById('number').innerText=highScore;
    document.body.style.backgroundColor='#60b347';
  }
}

document.querySelector('.again').addEventListener('click',function(){
  document.body.style.backgroundColor='#222';
  document.getElementById('message').innerText = 'Start guessing...';
  document.getElementById('number').innerText='?';
  score = 20;
  document.getElementById('score').innerText = score;
  guess = Math.trunc(Math.random() * 20);
})

// function onAgain(){
//     document.body.style.backgroundColor='#222';
//     document.getElementById('message').innerText = 'Start guessing...';
//     document.getElementById('number').innerText='?';
//     score = 20;
//     document.getElementById('score').innerText = score;
//     guess = Math.trunc(Math.random() * 20);
// }
