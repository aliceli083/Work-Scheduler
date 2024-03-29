// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

var currentDayEl = $("#currentDay");
var currentDay = dayjs().format("MMM D, YYYY");
currentDayEl.text(currentDay)

var currentHour = dayjs().hour();

var timeBlocks = document.querySelectorAll('.time-block')
for(var i=9; i< 18;i++) {

if (currentHour === i){
  var hour = $("#hour-"+i).children("textarea").addClass("present") 
}
else if (i < currentHour){

  var hour = $("#hour-"+i).children("textarea").addClass("past") 
}
else if (i > currentHour){
  var hour = $("#hour-"+i).children("textarea").addClass("future") 
}
$("#hour-"+i).children("textarea").val(localStorage.getItem("hour-"+i))

}

var saveBbtn = $(".saveBtn");
saveBbtn.on("click",function(){
  var parentId= $(this).parent().attr("id")
  var text = $(this).siblings("textarea").val()
  localStorage.setItem(parentId, text);
})









// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist