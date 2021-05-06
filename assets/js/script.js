//Display Current Date and Time in the Header
var curDateTime = moment();
$("#currentDay").text(curDateTime.format("dddd, MMM Do YYYY"));

//Current hour for conditional formatting
var currentHour = curDateTime.format('HH');

//Create function to check if the block is in the past,present of future
var stateCheck = function() {
    for (var i = 0; i < 9; i++) {
        $("tbody tr").each(function() {
            if (currentHour > $(this).data('value')) {
                $(this).addClass('past');
                $(this).removeClass('future');
                $(this).removeClass('present');
            } else if (currentHour < $(this).data('value')) {
                $(this).removeClass('past');
                $(this).removeClass('present');
                $(this).addClass('future');
            } else {
                $(this).removeClass('past');
                $(this).removeClass('future');
                $(this).addClass('present');
            }
        });
    };
};

//Run stateCheck on window.load and every second for fast calendar refresh
window.onload = function() {
    stateCheck();
    setInterval(stateCheck, 1000);
}

var renderClock = function() {
    $("#currentTime").text(moment().format("h:mm:ss a"));
}

//Render clock every second
$(function() {
    setInterval(renderClock, 1000);
});
//Get event text from the textarea correlated with the button pressed
function getEventText() {
    var eventText = $(this).prev().children('textarea').val();
    var eventID = $(this).prev().children('textarea').attr('id');
    //Set localStorage item named with the corresponding HTML Element ID 
    localStorage.setItem('Event Note ' + eventID, eventText);

}

$('.saveBtn').on('click', getEventText);
//Restore Events from localStorage
$(function() {
    //Iterate through all possible events
    for (var i = 9; i < 18; i++) {
        //identify the item for each event note
        var eventReturn = 'Event Note event' + i + 'input'
            //Set variable for each of the HTML IDs that will be iterated through
        var eventSelector = '#event' + i + 'input'
            //Set variable for each localStorage item as they are iterated through
        var setEventText = localStorage.getItem(eventReturn);
        //Set the text of the appropriate HTML element to the correlating value from localStorage
        $(eventSelector).text(setEventText);
    };
})