// use for moment js to add current time in jumbotron
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss"));

// use set interval to constantly update the time
var updateTime = setInterval(function () {
    var currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss")
    $("#currentDay").text(currentTime)
}, 1000);

// add event listener to disk button for hour and description
$(".saveBtn").on("click", function () {
    // console.log(this);
    var time = $(this).parent().attr("id");
    // console.log(time)
    var task = $(this).siblings(".description").val();
    // console.log(task)
    localStorage.setItem(time, task);
});

// get any stored tasks from local storage for each time block
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

// to check current hour with moment js and style 
function compareHour() {
    var hour = moment().hour();
    // method to loop over each time block
    $(".time-block").each(function () {
        var block = $(this).attr("id");
     // console.log(typeof block);
     // console.log(type of hour);
     // add or remove past/present/future classes on current hour with if/else statement 
        if (block < hour) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        } else if (block == hour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });
};

// call on the function
compareHour();