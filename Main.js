// button video section 5 
// start page 


var bttn1 = document.getElementById('bttn1');
bttn1.addEventListener('click', () => {
  let vid = document.getElementById('vid');
  

  vid.style.display="flex";
  vid.play();

}); 

let close = document.getElementById('close');
close.addEventListener('click', () => {
let vid = document.getElementById('vid');

vid.style.display="none";

})



const sec8txt = document.getElementById('sec8txt');

var text = sec8txt.innerText;

let arr = Array.from(text);

let span ="";



arr.forEach(function (e){
  span += `<span class="letters">${e}</span>`;
  
  
  
});

sec8txt.innerHTML = span;


// section 1 

const sec1txt = document.getElementById('sec1txt');

var texts = sec1txt.innerText;

let arry = Array.from(texts);

let spans ="";



arry.forEach(function (e){
  spans += `<span class="letters1">${e}</span>`;
  
  
  
});

sec1txt.innerHTML = spans;





gsap.from(".inner span",{
  y: 100,
  opacity:0,
  stagger: 0.1,

})






// section 2 




const sec2txt = document.getElementById('sec2txt1');

var textss = sec2txt.innerText;

let arraay = Array.from(textss);

let spanss ="";



arraay.forEach(function (f){
  spanss += `<span class="letters2">${f}</span>`;
  
  console.log(spanss);

  sec2txt1.innerHTML = spanss;
  
});

gsap.from(".sec2div span",{
  y: 100,
  opacity:0,
  stagger: 0.1,
  duration: 0.2,
  

})

