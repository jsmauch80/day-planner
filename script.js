var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);


$(".saveBtn").on("click", function () {

var text = $(this).sibling(".description").val();
var time = $(this).parent().attr("id");

localStorage.setItem(time, text);})

$("8am .description").val(localStorage.getItem("8am"));
$("9am .description").val(localStorage.getItem("9am"));
$("10am .description").val(localStorage.getItem("10am"));
$("11am .description").val(localStorage.getItem("11am"));
$("12pm .description").val(localStorage.getItem("12am"));
$("1pm .description").val(localStorage.getItem("1pm"));
$("2pm .description").val(localStorage.getItem("2pm"));
$("3pm .description").val(localStorage.getItem("3pm"));
$("4pm .description").val(localStorage.getItem("4pm"));
$("5pm .description").val(localStorage.getItem("5pm"));
