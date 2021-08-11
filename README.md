# Frontend Mentor - Creative agency single page site solution

This is a solution to the [Creative agency single page site challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/creative-agency-singlepage-site-Pq6V3I2RM). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Creative agency single page site solution](#frontend-mentor---creative-agency-single-page-site-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate the slider using either their mouse/trackpad or keyboard

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Mobile-first workflow
- Semantic HTML5 markup
- CSS custom properties
- Sass
- Flexbox
- CSS Grid

### What I learned

The number 1 take away is how the format the HTML when there will be multiple overlapping elements within a grid.  Specifically, all the elements that will interact with each other need to be within the same grid.  Secondly, CSS grid uses a parent to child relationship.  Therefore, an element that will placed by the grid needs to be a child to the parent of the grid element.  The child element may be a div that contains other elements, but grid will only place that container div.  Grid will not be able to access any elements within the container div.

Up until this project, I have found nature divisions within a website to wrap in their own section/div.  

### Continued development

I will continue to make frontendmentor.io projects to get more practice and learn more skills.  Each project has its own set of challenges which are great for adding new skills.

### Useful resources

- [Overlap content with Grid](https://www.youtube.com/watch?v=HFG3BKOqOlE) - This short tutorial from Kevin Powell helped me understand how to overlap content while using CSS grid.
- [Changing the color of SVG file - part 1](https://stackoverflow.com/questions/22252472/how-to-change-the-color-of-an-svg-element) - I have used the stackoverflow resource a couple times because it has a link the third resource below.
- [Changing the color of SVG file - part 2](https://codepen.io/sosuke/pen/Pjoqqp) - This is a link to the codepen that has the function for get the filter settings to change the color of an SVG file.  It may not be perfect, but does more than 95% of the job.

## Author

- Frontend Mentor - [@davidrhyne](https://www.frontendmentor.io/profile/davidrhyne)
- Twitter - [@DavidRhyne16](https://www.twitter.com/DavidRhyne16)