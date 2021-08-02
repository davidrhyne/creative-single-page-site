const menu = document.getElementById('nav-toggle')
const nav = document.getElementById('nav')
const headerTitle = document.getElementById('header__title')
// const headerArrow = document.getElementById('header__arrow')
const hamburger = document.getElementById('hamburger')
const menuItems = document.querySelectorAll('.menu-item')

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

const slides = document.getElementsByClassName('project__carousel-item')
const slidesTitles = document.getElementsByClassName('product__carousel-item-title')
let slidePosition = 0
const totalSlides = slides.length

let isMenuOpen = false;

function handleMenuClick() {
    // hide these elements while the menu is open
    nav.classList.toggle('hide')
    headerTitle.classList.toggle('hide')
    // headerArrow.classList.toggle('hide')
    // toggle isMenuOpen to true
    isMenuOpen = !isMenuOpen;
    // adjust the height of the hamburger
    isMenuOpen === false ? hamburger.style.height = '2px' : hamburger.style.height = '1px';
}

// event listeners 
// for opening and showing menu
menu.addEventListener('click', handleMenuClick)

// for hiding the menu after an option was selected
menuItems.forEach(el => el.addEventListener('click', handleMenuClick))

// on load
nav.classList.add('hide')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

// carousel slides + associated slide titles
document.getElementById('project__carousel-nav-button-next').addEventListener('click', moveToNextSlide);
document.getElementById('project__carousel-nav-button-previous').addEventListener('click', moveToPrevSlide);

console.log('slidePosition = ', slidePosition)
console.log('totalSlides = ', totalSlides)
console.log('slidesTitles.length = ', slidesTitles.length)

function hideAllSlides() {
    for (let slide of slides) {
        //product__carousel-item-title--visible
        //product__carousel-item-title--hidden
        slide.classList.remove('project__carousel-item--visible');
        slide.classList.add('project__carousel-item--hidden');

        //slidesTitles.classList.remove('product__carousel-item-title--visible');
        //slidesTitles.classList.add('product__carousel-item-title--hidden');
    }

    for (let title of slidesTitles) {
        title.classList.remove('product__carousel-item-title--visible');
        title.classList.add('product__carousel-item-title--hidden');
    }
}

function moveToNextSlide() {
    console.log('next button has been clicked')
    //console.log('slidePosition before = ', slidePosition)
    hideAllSlides();
    
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    //console.log('slidePosition after = ', slidePosition)
    
    slides[slidePosition].classList.add("project__carousel-item--visible");
    slidesTitles[slidePosition].classList.add("product__carousel-item-title--visible");
}

function moveToPrevSlide() {
    //console.log('previous button has been clicked')
    //console.log('slidePosition before = ', slidePosition)
    hideAllSlides();
    
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    //console.log('slidePosition after = ', slidePosition)
    slides[slidePosition].classList.add("project__carousel-item--visible");
    slidesTitles[slidePosition].classList.add("product__carousel-item-title--visible");
}