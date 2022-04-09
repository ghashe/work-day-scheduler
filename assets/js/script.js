// Declaring today’s date and present hour variables
var currentDate =
  moment().format("dddd") + " " + moment().format("Do MMM YYYY");
var presentHour = moment().format("h:mm:ss a");

// Assigning variables for each our

// First shift
var firstShift9 = $("#9_first_shift_9AM");
var firstShift10 = $("#10_first_shift_10AM");
var firstShift11 = $("#11_first_shift_11AM");
var firstShift12 = $("#12_first_shift_12PM");
var firstShift1 = $("#13_first_shift_1PM");
var firstShift2 = $("#14_first_shift_2PM");
var firstShift3 = $("#15_first_shift_3PM");
var firstShift4 = $("#16_first_shift_4PM");
var firstShift5 = $("#17_first_shift_5PM");

// Second shift
var secondShift5 = $("#17_second_shift_5PM");
var secondShift6 = $("#18_second_shift_6PM");
var secondShift7 = $("#19_second_shift_7PM");
var secondShift8 = $("#20_second_shift_8PM");
var secondShift9 = $("#21_second_shift_9PM");
var secondShift10 = $("#22_second_shift_10PM");
var secondShift11 = $("#23_second_shift_11PM");
var secondShift12 = $("#0_second_shift_12AM");
var secondShift1 = $("#1_second_shift_1AM");

// Third shift
var thirdShift12 = $("#0_third_shift_12AM");
var thirdShift1 = $("#1_third_shift_1AM");
var thirdShift2 = $("#2_third_shift_2AM");
var thirdShift3 = $("#3_third_shift_3AM");
var thirdShift4 = $("#4_third_shift_4AM");
var thirdShift5 = $("#5_third_shift_5AM");
var thirdShift6 = $("#6_third_shift_6AM");
var thirdShift7 = $("#7_third_shift_7AM");
var thirdShift8 = $("#8_third_shift_8AM");

var hour = moment().hours();
var userInput;
var hourSpan;

// The date and the time
var interval = setInterval(function () {
  var thisHour = moment();
  $("#currentDay").html(
    thisHour.format("YYYY MMMM DD") +
      " " +
      thisHour.format("dddd").substring(0, 3).toUpperCase()
  );
  $("#currentDay").html(currentDate + " " + thisHour.format("hh:mm:ss A"));
}, 100);

function initPage() {
  console.log("The time is " + hour);

  // First shift init
  var initFirstShift9 = JSON.parse(localStorage.getItem("09:00 AM"));
  firstShift9.val(initFirstShift9);

  var initFirstShift10 = JSON.parse(localStorage.getItem("10:00 AM"));
  firstShift10.val(initFirstShift10);

  var initFirstShift11 = JSON.parse(localStorage.getItem("11:00 AM"));
  firstShift11.val(initFirstShift11);

  var initFirstShift12 = JSON.parse(localStorage.getItem("12:00 PM"));
  firstShift12.val(initFirstShift12);

  var initFirstShift1 = JSON.parse(localStorage.getItem("01:00 PM"));
  firstShift1.val(initFirstShift1);

  var initFirstShift2 = JSON.parse(localStorage.getItem("02:00 PM"));
  firstShift2.val(initFirstShift2);

  var initFirstShift3 = JSON.parse(localStorage.getItem("03:00 PM"));
  firstShift3.val(initFirstShift3);

  var initFirstShift4 = JSON.parse(localStorage.getItem("04:00 PM"));
  firstShift4.val(initFirstShift4);

  var initFirstShift5 = JSON.parse(localStorage.getItem("05:00 PM"));
  firstShift5.val(initFirstShift5);

  // Second shift init

  var initSecondShift5 = JSON.parse(localStorage.getItem("05:00 pm"));
  secondShift5.val(initSecondShift5);

  var initSecondShift6 = JSON.parse(localStorage.getItem("06:00 pm"));
  secondShift6.val(initSecondShift6);

  var initSecondShift7 = JSON.parse(localStorage.getItem("07:00 pm"));
  secondShift7.val(initSecondShift7);

  var initSecondShift8 = JSON.parse(localStorage.getItem("08:00 pm"));
  secondShift8.val(initSecondShift8);

  var initSecondShift9 = JSON.parse(localStorage.getItem("09:00 pm"));
  secondShift9.val(initSecondShift9);

  var initSecondShift10 = JSON.parse(localStorage.getItem("10:00 pm"));
  secondShift10.val(initSecondShift10);

  var initSecondShift11 = JSON.parse(localStorage.getItem("11:00 pm"));
  secondShift11.val(initSecondShift11);

  var initSecondShift12 = JSON.parse(localStorage.getItem("12:00 am"));
  secondShift12.val(initSecondShift12);

  var initSecondShift1 = JSON.parse(localStorage.getItem("01:00 am"));
  secondShift1.val(initSecondShift1);

  // Third shift init

  var initThirdShift12 = JSON.parse(localStorage.getItem("12:00 AM"));
  thirdShift12.val(initThirdShift12);

  var initThirdShift1 = JSON.parse(localStorage.getItem("01:00 AM"));
  thirdShift1.val(initThirdShift1);

  var initThirdShift2 = JSON.parse(localStorage.getItem("02:00 AM"));
  thirdShift2.val(initThirdShift2);

  var initThirdShift3 = JSON.parse(localStorage.getItem("03:00 AM"));
  thirdShift3.val(initThirdShift3);

  var initThirdShift4 = JSON.parse(localStorage.getItem("04:00 AM"));
  thirdShift4.val(initThirdShift4);

  var initThirdShift5 = JSON.parse(localStorage.getItem("05:00 AM"));
  thirdShift5.val(initThirdShift5);

  var initThirdShift6 = JSON.parse(localStorage.getItem("06:00 AM"));
  thirdShift6.val(initThirdShift6);

  var initThirdShift7 = JSON.parse(localStorage.getItem("07:00 AM"));
  thirdShift7.val(initThirdShift7);

  var initThirdShift8 = JSON.parse(localStorage.getItem("08:00 AM"));
  thirdShift8.val(initThirdShift8);
}

// Defining a function that is used to determine whether a task is past, present, or future compared to the current hour by changing the color of the dialog box where the task is entered.

function changeBackgroundColor() {
  $(".form-control").each(function () {
    var checkTime = parseInt($(this).attr("id"));
    hour = parseFloat(hour);
    console.log(checkTime);
    // console.log(hour);

    // Compare each hour of the day to the current hour to determine if it is past, present, or future.
    if (hour + 24 == checkTime) {
      $(this).addClass("present");
    } else if (hour > checkTime) {
      $(this).addClass("past");
    } else if (hour < checkTime) {
      $(this).addClass("future");
    } else {
      $(this).addClass("present");
    }
  });
}

$(document).ready(function () {
  initPage();
  changeBackgroundColor();

  // When a user clicks the save button, the input is stored to the local storage
  $(".saveBtn").on("click", function () {
    userInput = $(this).siblings(".form-control").val().trim();
    console.log(userInput);
    hourSpan = $(this).siblings(".input-group-prepend").text().trim();
    console.log(hourSpan);
    localStorage.setItem(hourSpan, JSON.stringify(userInput));
  });

  // A button that clears a user's entire day's task when clicked.
  $("#clearDay").on("click", function () {
    localStorage.clear();
    initPage();
  });
});
