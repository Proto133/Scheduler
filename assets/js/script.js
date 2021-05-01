//Display Current Date and Time in the Header
var curDateTime = moment();
$("#currentDay").text(curDateTime.format("dddd, MMM Do YYYY"));
$("#currentTime").text(curDateTime.format("h:mm:ss a"));