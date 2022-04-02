const Typewriter = function(txtElement, words, wait = 3000){
  this.txtElement = txtElement
  this.words = words
  this.txt = ''
  this.wordIndex = 0
  this.wait = parseInt(wait, 10)
  this.type()
  this.isDeleting = false

}

// Type Method
Typewriter.prototype.type = function(){ 
  // Current index of word
  const current = this.wordIndex % this.words.length 
  // Get full text of currentv word
  const fullTxt = this.words[current] 

  // Check if deleting
  if(this.isDeleting){
    // Remove char
    this.txt = fullTxt.substring(0, this.txt.length - 1)

  }else {
    // Add Char
    this.txt = fullTxt.substring(0, this.txt.length + 1)
  }

  // Indert txt into element
  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`

  // Type Speed
  let typeSpeed = 300

  if(this.isDeleting){
    typeSpeed /= 3
  }

  // If word is complete
  if(!this.isDeleting && this.txt === fullTxt){
    // Make pause at end
    typeSpeed = this.wait
    // Set deleting to true
    this.isDeleting = true 
  } else if(this.isDeleting && this.txt === ''){
    this.isDeleting = false
    // Move to next word
    this.wordIndex++
    // Pause before start typing
    typeSpeed = 500
  }

  setTimeout(() => this.type(), typeSpeed)
}


// Init on DOM Load
document.addEventListener('DOMContentLoaded', init)


// Init App
function init(){
  const txtElement = document.querySelector('.txt-type')
  const words = JSON.parse(txtElement.getAttribute('data-words'))
  const wait = txtElement.getAttribute('data-wait')

  // Init Typewriter
  new Typewriter(txtElement, words, wait)

}

// ***************Contact Form Script
const inputs = document.querySelectorAll('.input');

function focusFunc(){
  let parent = this.parentNode;
  parent.classList.add('focus')

}
function blurFunc(){
  let parent = this.parentNode;
  if(this.value == ""){
  parent.classList.remove('focus')
  }

}

inputs.forEach((input) => {
  input.addEventListener('focus', focusFunc);
  input.addEventListener('blur', blurFunc);

})

// ******************End of Contact Form Script


// ****************************Hamburger Menu
const hamburger = document.querySelector('.header .navbar nav .hamburger')
const mobile_menu = document.querySelector('.header .navbar nav ul')
const header = document.querySelector('.header.container')

hamburger.addEventListener('click', ()=>{
  hamburger.classList.toggle('active'); 
  mobile_menu.classList.toggle('active'); 
})
 
// ****************************End of Hamburger Menu

// ****************************Scrpit for Testimonial Page

const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const slides = document.querySelectorAll('.slide')

let index = 0;

display(index);

function display(index){
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
 
  slides[index].style.display = "flex" 
}

function nextSlide() { 
  index++;
  if(index > slides.length - 1){
    index = 0;
  }
  display(index);
}
function prevSlide() { 
  index--;
  if(index < 0){
    index = slides.length - 1  
  }
display(index);
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

// **************************** End of Scrpit for Testimonial Page
