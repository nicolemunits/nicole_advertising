/**
 * This is the client side.
 * The client connects to the server via io socket.
 * In this file we also have all the logic of the messages show
 */

var messages;
var update;
var counter = 1;
var bool=false;


$(document).ready(function()
{
    var socket=io.connect('http://localhost:8080');
    socket.on('data',function(data){
        messages=data;
        advertsToRun(0);
    });

    socket.on('update',function(data)
    {
        update=data;
        bool=true;
    });


});

//set text fields until textArray.length and the fill with empty strings
function setText(textArray)
{
    for (i = 0; i < textArray.length; i++)
    {
        $("p#" + i).text(textArray[i])
    }
    for (j = i; j < 10; j++)
    {
        $("p#" + j).text("")
    }
}

//set images fields until picArray.length and the fill with empty strings as image source
function setPic(picArray)
{
    for (i = 0; i < picArray.length; i++)
    {
        $("img#image"+i).attr("src",picArray[i])
    }
    for (j = i; j < 5; j++) {
        $("img#image"+j).attr("src","")
    }
}


//checking if message should be shown today
function daysMatch(currentDay,daysToRun,currentHour){
    for(i=0;i<daysToRun.length;i++){
        if(daysToRun[i].day==currentDay) {
            if (daysToRun[i].startHour <= currentHour && daysToRun[i].endHour > currentHour)
                return true;
        }
    }
    return false;
}


//validation according to current time
function validTime(index,messages,currentTime)
{
    var startDate=new Date(messages[index].time.startDate);
    var endDate=new Date(messages[index].time.endDate);

    if(startDate<=currentTime && endDate>=currentTime)
        return daysMatch(currentTime.getDay()+1,messages[index].time.hoursByDay,currentTime.getHours());
    else
        return false;
}


//running the messages (ads)
function advertsToRun(index)
{
    var currentTime = new Date();
    if (bool == true)
    {
        messages = update;
        bool=false;
        counter=1;
        index=0;
    }

    if(messages.length==0) //there are no messages to show
    {
        $("#result").load("empty.html"); //inject the "empty" file
        setTimeout (advertsToRun, (60-currentTime.getSeconds())*1000,0); //set timeout until the next minute
        return;
    }

    if(validTime(index,messages,currentTime)) //there is a message that need to be shown right now
    {
        $("#result").load(messages[index].link,function() //set texts&images and inject the message
        {
            setText(messages[index].text);
            setPic(messages[index].picture);
        });

        setTimeout (advertsToRun, messages[index].duration,(index+1)%messages.length); //set timeout by the message duration
        counter = 1;
    }
    else //there are no messages to show right now
    {
        if(counter==messages.length)
        {
            setTimeout (advertsToRun, (60-currentTime.getSeconds())*1000,(index+1)%messages.length); //set timeout until the next minute
            $("#result").load("empty.html"); //inject the "empty" file
            counter = 1;
        }
        else
        {
            setTimeout (advertsToRun, 0,(index+1)%messages.length);
            counter++;
        }
    }
}