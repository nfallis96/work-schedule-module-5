# Work Day Scheduler

## Table of Contents
* [Projects Description](#projects-description)
* [Screenshots - Code examples](#screenshots---code-examples)
* [Technologies Used](#technologies-used)
* [Links](#links)

## Projects Description
This project's purpose was to make a workday scheduler for planning work tasks during the day. This application uses Javascript, HTML, CSS, bootstrap, moment.js, and JQuery features. This application is a planner for work and keeps tasks in order. It allows people to insert text in each row and save it by clicking a save button. Even if you refresh the page, it stays saved in the application.
Furthermore, each row time block has a color set according to the current time of day. The hours that have past are in the color gray. The present hour will be in the color red. The hours in the future are in the color green. 

## Screenshots - Code examples
Screen shot of application
![Work-schedule Screenshot](work-schedule%20.png)

to retrieve any stored local storage for each time block
```js
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));
$("#18 .description").val(localStorage.getItem("18"));
$("#19 .description").val(localStorage.getItem("19"));
$("#20 .description").val(localStorage.getItem("20"));
 ```


     




## Technologies Used 
![html badge](https://img.shields.io/badge/language-html-red)
![css badge](https://img.shields.io/badge/language-css-green)
![javascript badge](https://img.shields.io/badge/language-javascript-yellow)

## Links
link to github: https://github.com/nfallis96
link to deployment: https://nfallis96.github.io/work-schedule-module-5/
