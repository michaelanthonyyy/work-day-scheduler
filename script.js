
// current date and time header
$("#currentDate h5").text(moment().format('MMMM Do YYYY, h:mm:ss a'));


// define work hours as variable?




// on click function for save buttons. sets to save to specific location in local storage
$("button").click(function(){
    value = "";
})


// code to write texts to local storage after hitting save
$(document).ready(function(){
    if(localStorage.getItem()) {
        changeSchedule();
    }
})


// track current hours, past hours, and later hours 
// past hours boxes darkened, current hour changed to red, future hours lime green





