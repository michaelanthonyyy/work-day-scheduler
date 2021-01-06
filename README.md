# Work Day Scheduler

## Summary
An employee with a busy schedule needs a Daily Planner to use at the start of 2021 with his busy work schedule.
He wants to add events to each hour of the day so he can efficiently make use of his time. 
<br>
<br>

## Site Picture
![Site](Assets/homepage.png)

<br>
<br>

## What Was Done
BootStrap elements were used to create the majority of the HTML elements. Using JQUERY, elements were selected and
given specific instuctions through functions. The buttons were made to save the user inputs in local storage while 
localstorage.getItem is used to keep the user input's in the textarea as long as it had been saved previously.
The time's of the day are represented on the calendar by the way of the background color through the last function
made in the script.jss file. The colors are then manipulated through the style.css to better represent the current
time of the day.
<br>
<br>

## Code Snippet
```javascript
$("button").click(function () {
    var value = $(this).siblings(".textentry").val();
    var key = $(this).siblings(".time").text();
    localStorage.setItem(key, value);
    console.log(key);
    console.log(value);
})

$(".nine").text(localStorage.getItem("9 AM"));
$(".ten").text(localStorage.getItem("10 AM"));
$(".eleven").text(localStorage.getItem("11 AM"));
$(".twelve").text(localStorage.getItem("12 PM"));
$(".one").text(localStorage.getItem("1 PM"));
$(".two").text(localStorage.getItem("2 PM"));
$(".three").text(localStorage.getItem("3 PM"));
$(".four").text(localStorage.getItem("4 PM"));
$(".five").text(localStorage.getItem("5 PM"));
```
This on click function of the code applies to each button of the daily scheduler. It allows the page to save the 
text area to local storage so even on a page refresh of the browser, the code is saved locally. The second half of
the code snippet loads the text area for each hour of the day if it had been saved previously. 
<br>
<br>

## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [BootStrap](https://getbootstrap.com/)
* [Moment.JS] (https://momentjs.com/docs/)
* [JQUERY] (https://https://jquery.com/)


<br>
<br>

## Deployed Link

[Live Link "Work Day Scheduler"](https://michaelanthonyyy.github.io/work-day-scheduler/)

<br>

## Authors

**Michael Medina** 
- [Link to Github](https://github.com/michaelanthonyyy)
- [Link to LinkedIn](https://www.linkedin.com/in/michael-medina-22aa70200?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B311BosSLTMS4JkhAfkX61A%3D%3D)

<br>

## License
The MIT License (MIT)