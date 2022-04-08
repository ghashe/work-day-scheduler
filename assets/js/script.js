// Declaring today’s date and present hour variables
var currentDate =
  moment().format("dddd") + " " + moment().format("Do MMM YYYY");
var presentHour = moment().format("h:mm:ss a");

// Assigning variables for each our

// First shift
firstShift9 = $("#first_shift_9");
firstShift10 = $("#first_shift_10");
firstShift11 = $("#first_shift_11");
firstShift12 = $("#first_shift_12");
firstShift1 = $("#first_shift_1");
firstShift2 = $("#first_shift_2");
firstShift3 = $("#first_shift_3");
firstShift4 = $("#first_shift_4");
firstShift5 = $("#first_shift_5");

// Second shift
secondShift5 = $("#second_shift_5");
secondShift6 = $("#second_shift_6");
secondShift7 = $("#second_shift_7");
secondShift8 = $("#second_shift_8");
secondShift9 = $("#second_shift_9");
secondShift10 = $("#second_shift_10");
secondShift11 = $("#second_shift_11");
secondShift12 = $("#second_shift_12");
secondShift1 = $("#second_shift_1");

// Third shift
thirdShift12 = $("#third_ shift_12");
thirdShift1 = $("#third_shift_1");
thirdShift2 = $("#third_shift_2");
thirdShift3 = $("#third_shift_3");
thirdShift4 = $("#third_shift_4");
thirdShift5 = $("#third_shift_5");
thirdShift6 = $("#third_shift_6");
thirdShift7 = $("#third_shift_7");
thirdShift8 = $("#third_shift_8");

// The date and the time
var interval = setInterval(function () {
  var thisHour = moment();
  $("#currentDay").html(
    thisHour.format("YYYY MMMM DD") +
      " " +
      thisHour.format("addd").substring(0, 3).toUpperCase()
  );
  $("#currentDay").html(currentDate + " " + thisHour.format("hh:mm:ss A"));
}, 100);

function initPage() {
  console.log("The time is " + hour);

  // First shift init
  var initFirstShift9 = JSON.parse(localStorage.getItem("09:00 am"));
  firstShift9.val(initFirstShift9);

  var initFirstShift10 = JSON.parse(localStorage.getItem("10:00 am"));
  firstShift10.val(initFirstShift10);

  var initFirstShift11 = JSON.parse(localStorage.getItem("11:00 am"));
  firstShift11.val(initFirstShift11);

  var initFirstShift12 = JSON.parse(localStorage.getItem("12:00 PM"));
  firstShift12.val(initFirstShift12);

  var initFirstShift1 = JSON.parse(localStorage.getItem("12:00 PM"));
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

  var initSecondShift5 = JSON.parse(localStorage.getItem("05:00 PM"));
  secondShift5.val(initSecondShift5);

  var initSecondShift6 = JSON.parse(localStorage.getItem("06:00 PM"));
  secondShift6.val(initSecondShift6);

  var initSecondShift7 = JSON.parse(localStorage.getItem("07:00 PM"));
  secondShift7.val(initSecondShift7);

  var initSecondShift8 = JSON.parse(localStorage.getItem("08:00 PM"));
  secondShift8.val(initSecondShift8);

  var initSecondShift9 = JSON.parse(localStorage.getItem("09:00 PM"));
  secondShift9.val(initSecondShift9);

  var initSecondShift10 = JSON.parse(localStorage.getItem("10:00 PM"));
  secondShift10.val(initSecondShift10);

  var initSecondShift11 = JSON.parse(localStorage.getItem("11:00 PM"));
  secondShift11.val(initSecondShift11);

  var initSecondShift12 = JSON.parse(localStorage.getItem("12:00 PM"));
  secondShift12.val(initSecondShift12);

  var initSecondShift1 = JSON.parse(localStorage.getItem("01:00 PM"));
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

// This makes it possible to change the background color by iterating through the array of military time values and comparing them to the current hour
let military_time = [
  9, 10, 11, 12, 13, 14, 15, 16, 17, 17, 18, 19, 20, 21, 22, 23, 24, 1, 24, 1,
  2, 3, 4, 5, 6, 7, 8,
];
