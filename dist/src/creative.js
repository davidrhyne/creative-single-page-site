/************ menu and navigation variables ************/
const menu = document.getElementById('nav-toggle')
const nav = document.getElementById('nav')
const hamburger = document.getElementById('hamburger')
const menuItems = document.querySelectorAll('.menu-item')
const body = document.querySelector('body')
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')
let isMenuOpen = false;

/************ carousel variables  ************/
const slides = document.getElementsByClassName('project__carousel-item')
const slidesTitles = document.getElementsByClassName('product__carousel-item-title')
let slidePosition = 0
const totalSlides = slides.length


/************ menu and navigation section ************/

// handle the clicks on the hamburger and menu items
function handleMenuClick() {

    // show or hide the menu list 
    nav.classList.toggle('hide')

    // toggle the value to opposite value
    isMenuOpen = !isMenuOpen;
    
    // adjust the height of the hamburger
    isMenuOpen === false ? hamburger.style.height = '2px' : hamburger.style.height = '1px';
    
    //isMenuOpen ? document.body.classList.remove('nav-open') : document.body.classList.add('nav-open');
}

// for opening and showing menu
menu.addEventListener('click', handleMenuClick)

// for hiding the menu after an option was selected
menuItems.forEach(el => el.addEventListener('click', handleMenuClick))

/* watch for clicks outside of the menu and navigation elements
   if the user clicks outside, then close the menu  */
body.addEventListener('mouseup', (event) => {
    const classClicked = event.target.classList
    const menuItems = ['nav-link', 'nav-toggle', 'hamburger']
    
    if(!menuItems.includes(classClicked[0])  ) {
        document.body.classList.remove('nav-open')
        nav.classList.add('hide')
        isMenuOpen = false
    }
})

// animate the hambuger into an X shape
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

// animate the from X shape back to hamburger
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

// on load
nav.classList.add('hide')

/************ carousel  ************/

// carousel slides + associated slide titles
document.getElementById('project__carousel-nav-button-next').addEventListener('click', moveToNextSlide);
document.getElementById('project__carousel-nav-button-previous').addEventListener('click', moveToPrevSlide);

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove('project__carousel-item--visible');
        slide.classList.add('project__carousel-item--hidden');
    }

    for (let title of slidesTitles) {
        title.classList.remove('product__carousel-item-title--visible');
        title.classList.add('product__carousel-item-title--hidden');
    }
}

function moveToNextSlide() {
    hideAllSlides();
    
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    
    slides[slidePosition].classList.add("project__carousel-item--visible");
    slidesTitles[slidePosition].classList.add("product__carousel-item-title--visible");
}

function moveToPrevSlide() {
    hideAllSlides();
    
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    slides[slidePosition].classList.add("project__carousel-item--visible");
    slidesTitles[slidePosition].classList.add("product__carousel-item-title--visible");
}