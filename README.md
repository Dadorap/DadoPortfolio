# Abdulkadir Ali Web Portfolio

### Technologies Used

This website was built using HTML, CSS, and JavaScript.

### Project Overview

This project was an assignment to build a modern and responsive Single Page Application (SPA) while studying to become a full-stack developer. The goal was to test our skills in HTML, CSS, and JavaScript. 

The website uses `addEventListener` to handle user interactions, such as right-clicking to trigger "createExplosion".

### Principles Used

Single Responsibility Principle (SRP) from SOLID: Each function is responsible for one specific task.
Separation of Concerns (SoC): I structured my project by creating separate CSS and JavaScript files for different sections of the HTML.

### Functions List

- animateCircles → This function makes the div elements follow each other in a smooth motion, creating a flame like trailing effect on mouse movement.
- createExplosion → This function creates 50 div elements where they act as particles in an explosion effect when you right click on your mouse..
- getWeather → This function fetches weather data from this website https://open-meteo.com/ retrieving temperature, cloudcover, probability of rain and snow for Härnösand.
- displayWeather → This function displays hourly temperature, cloud cover, and rain probability, along with a small PNG icon representing the weather conditions (sunny, cloudy, rainy, or snowing). This provides users with both visual and textual weather information.
