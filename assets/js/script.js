//Display Current Date and Time in the Header
var curDateTime = moment();
$("#currentDay").text(curDateTime.format("dddd, MMM Do YYYY"));

//Current hour for conditional formatting
var currentHour = curDateTime.format('HH');

//Create a new array filled with table rows and their corresponding value.
var tableData = new Array();
$('#timeTable tr').each(function(row, th) {
    tableData[row] = {
        Hour: $(th).find('.timeGrid').data('value'),
    }
});
tableData.shift();

//Create function to check if the block is in the past,present of future
var stateCheck = function() {
    for (var i = 0; i < tableData.length; i++) {
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

//Run stateCheck every 30 seconds.
window.onload = function() {
    stateCheck();

    // setTimeout(stateCheck, 1000 * 30);
}

var renderClock = function() {
    $("#currentTime").text(moment().format("h:mm:ss a"));
}

//Render clock every second
$(function() {
    setInterval(renderClock, 1000);
});

var savedNotes = []

function getEventText() {
    var eventText = $(this).prev().children('textarea').val();
    var eventID = $(this).prev().children('textarea').attr('id');
    localStorage.setItem('Event Note ' + eventID, eventText);

}

$('.saveBtn').on('click', getEventText);
//Restore Events form localStorage
$(function() {
    for (var i = 9; i < 18; i++) {
        var eventReturn = 'Event Note event' + i + 'input'
        var eventSelector = '#event' + i + 'input'
        var setEventText = localStorage.getItem(eventReturn);
        $(eventSelector).text(setEventText);
    };
})