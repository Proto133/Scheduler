//Display Current Date and Time in the Header
var curDateTime = moment();
$("#currentDay").text(curDateTime.format("dddd, MMM Do YYYY"));

var renderClock = function() {
    $("#currentTime").text(moment().format("h:mm:ss a"));
}

//Set HTML table rows as an object array in JS
$('#timeTable tr').each(function(row, tr) {
    tableData = tableData +
        $(tr).find('th:eq(0)').text() + ' '
});

var tableData = new Array();
$('#timeTable tr').each(function(row, tr) {
    tableData[row] = {
        SyncValue: $(tr).find('.timeGrid').data('value'),
    }
});
tableData.shift();

//Color coding Blocks
var blockTime = [{
        SyncValue: "",
        Name: "9AM",
        Time: "9:00:00 am",
    },
    {
        SyncValue: "",
        Name: "10AM",
        Time: "10:00:00 am",
    },
    {
        SyncValue: "",
        Name: "11AM",
        Time: "11:00:00 am",
    },
    {
        SyncValue: "",
        Name: "12PM",
        Time: "12:00:00 pm",
    },
    {
        SyncValue: "",
        Name: "1PM",
        Time: "1:00:00 pm",
    },
    {
        SyncValue: "",
        Name: "2PM",
        Time: "2:00:00 pm",
    },
    {
        SyncValue: "",
        Name: "3PM",
        Time: "3:00:00 pm",
    },
    {
        SyncValue: "",
        Name: "4PM",
        Time: "4:00:00 pm",
    },
    {
        SyncValue: "",
        Name: "5PM",
        Time: "5:00:00 pm",
    },
]



$(function() {
    for (i = 0; i < blockTime.length; i++) {
        blockTime[i].SyncValue = tableData[i].SyncValue
        tableData[i].Time = blockTime[i].Time
    };
});


//Render clock every second
$(function() {
    setInterval(renderClock, 1000);
});


//Create Each function for all arrays
Array.prototype.each = function(callback) {
    for (var i = 0; i < this.length; i++) {
        callback(this[i]);
    }
}

console.log(timeTable.each())

/* SEE IF NEEDED 
    



*/