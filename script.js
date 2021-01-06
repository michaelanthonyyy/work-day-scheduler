// Current date and time header
$("#currentDate h5").text(moment().format('MMMM Do YYYY, h:mm:ss a'));


// Loads local storage into textarea for each hour on the schedule
$(".nine").text(localStorage.getItem("9 AM"));
$(".ten").text(localStorage.getItem("10 AM"));
$(".eleven").text(localStorage.getItem("11 AM"));
$(".twelve").text(localStorage.getItem("12 PM"));
$(".one").text(localStorage.getItem("1 PM"));
$(".two").text(localStorage.getItem("2 PM"));
$(".three").text(localStorage.getItem("3 PM"));
$(".four").text(localStorage.getItem("4 PM"));
$(".five").text(localStorage.getItem("5 PM"));


// Button on click function to save the textarea value into local storage for each
// specified hour of the day
$("button").click(function () {
    var value = $(this).siblings(".textentry").val();
    var key = $(this).siblings(".time").text();
    localStorage.setItem(key, value);
    // console.log(key);
    // console.log(value);
})

// track current hours, past hours, and later hours 
// past hours boxes darkened, current hour changed to red, future hours lime green
function comparisonTime() {
    var currentTime = moment().hour();
    console.log(currentTime);
    $(".row").each(function () {
        var time = parseInt($(this).attr("data-value")[1]);
        if (currentTime === time) {
            $(this).addClass("now");
        }
        else if (currentTime < time) {
            $(this).addClass("past");
        }
        else {
            $(this).addClass("future");
        }
    })

}