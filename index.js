

const f = document.querySelector('.f');
const insta = document.querySelector('.in');
const you = document.querySelector('.you');
const te = document.querySelector('.te');


const up = document.querySelector(".up");
up.onclick = function () {
  window.location.href = "index.html#navbar";
};

f.onclick = function () {
  window.location.href = "http://www.facebook.com";
};

insta.onclick = function () {
  window.location.href = "http://www.instagram.com";
};


te.onclick = function () {
  window.location.href = "https://www.telegram.org";
};

you.onclick = function () {
  window.location.href = "http://www.youtube.com";
};


const tec = document.querySelector('.tec');
tec.addEventListener('click' , ()=>{
   window.location.href='https://first-osar-website.netlify.app/';
});


const movie = document.querySelector('.movie');
movie.addEventListener('click', ()=>{
  window.location.href='https://osar-dare.netlify.app/';
});

const dive = document.querySelector('.dive');
dive.addEventListener('click', ()=>{
  window.location.href='https://osar-dive.netlify.app/';
});

const beauty = document.querySelector('.beauty');
beauty.addEventListener('click' , ()=>{
   window.location.href='https://osar-website.netlify.app/';
});

const tic_tac = document.querySelector('.tic_tac');
tic_tac.addEventListener('click' , ()=>{
  window.location.href='https://osar-tic.netlify.app/';
});

const bmw = document.querySelector('.bmw');
bmw.addEventListener('click' , ()=>{
   window.location.href='https://osar-carweb.netlify.app/';
});

const rock = document.querySelector('.rock');
rock.addEventListener('click' , ()=>{
   window.location.href='https://minirock.netlify.app/';
});

const clock = document.querySelector('.clock');
clock.addEventListener('click' , ()=>{
   window.location.href='https://osar-digital.netlify.app/';
});

const calculator = document.querySelector('.calculator');
calculator.addEventListener('click' , ()=>{
   window.location.href='https://osar-calculator.netlify.app/';
});

const dice = document.querySelector('.dice');
dice.addEventListener('click' , ()=>{
   window.location.href='https://osar-dice.netlify.app/';
});



const portfolio = document.querySelector('.portfolio');
portfolio.addEventListener('click' , ()=>{
   window.location.href='index.html';
});


const tocon = document.querySelector('.tocon');
tocon.addEventListener('click', ()=>{
  window.location.href='index.html#con'
});

let ah = document.querySelector('.ah');
let ap = document.querySelector('.ap');


let str = "Designer, Frontend Developer & Backend Developer";

let num = 0;

function text() {
  num++;
  ah.textContent = str.slice(0, num);

}

let s1 = setInterval(text, 130);

let str2 =
  "I design and code beautifully simple things, and I love what I do.";

let num1 = 0;

function txt() {
  num1++;
  ap.textContent = str2.slice(0, num1);

  
}

setInterval(txt, 90);


