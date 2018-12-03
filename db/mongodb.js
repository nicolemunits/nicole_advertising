//messages texts&images
var images1 =["rolex.jpg","rolex2.jpg"];
var textArray1 =["Rolex","feel what FEDDERER FEELS ", "be a CHAMPION"];

var images2 =["zanzibar.jpg"];
var textArray2 =["Zanzibar is calling for you!","join us on a wonderful trip!"];

var images3 =[];
var textArray3 =[];

var images4 =[];
var textArray4 =["a dolmatic dog is lost! small dotted and under the name bobby","Please if found call nicole-0546995699"];

var images5 =["ring.png","ring2.png"];
var textArray5 =["SHE said YESSSSSS!!!","now it's time to buy here a real ring!"];



//messages days&hours
var daysAndHours1=[{"day":1,"startHour":8,"endHour":22},{"day":2,"startHour":8,"endHour":22},{"day":3,"startHour":8,"endHour":22},{"day":4,"startHour":8,"endHour":22},{"day":5,"startHour":8,"endHour":22},{"day":6,"startHour":8,"endHour":22},{"day":7,"startHour":8,"endHour":22}];
var daysAndHours2=[{"day":1,"startHour":8,"endHour":22},{"day":2,"startHour":8,"endHour":22},{"day":3,"startHour":8,"endHour":22},{"day":4,"startHour":8,"endHour":22},{"day":5,"startHour":8,"endHour":22},{"day":6,"startHour":8,"endHour":22},{"day":7,"startHour":8,"endHour":22}];
var daysAndHours3=[{"day":1,"startHour":8,"endHour":22},{"day":2,"startHour":8,"endHour":22},{"day":3,"startHour":8,"endHour":22},{"day":4,"startHour":8,"endHour":22},{"day":5,"startHour":8,"endHour":22},{"day":6,"startHour":8,"endHour":22},{"day":7,"startHour":8,"endHour":22}];
var daysAndHours4=[{"day":1,"startHour":8,"endHour":22},{"day":2,"startHour":8,"endHour":22},{"day":3,"startHour":8,"endHour":22},{"day":4,"startHour":8,"endHour":22},{"day":5,"startHour":8,"endHour":22},{"day":6,"startHour":8,"endHour":22},{"day":7,"startHour":8,"endHour":22}];
var daysAndHours5=[{"day":1,"startHour":8,"endHour":22},{"day":2,"startHour":8,"endHour":22},{"day":3,"startHour":8,"endHour":22},{"day":4,"startHour":8,"endHour":22},{"day":5,"startHour":8,"endHour":22},{"day":6,"startHour":8,"endHour":22},{"day":7,"startHour":8,"endHour":22}];




//message dates(&days&hours)
var advertTime1= {"startDate":"2018-01-16","endDate":"2018-01-31","hoursByDay":daysAndHours1};
var advertTime2= {"startDate":"2018-01-16","endDate":"2018-01-31","hoursByDay":daysAndHours2};
var advertTime3= {"startDate":"2018-01-16","endDate":"2018-01-31","hoursByDay":daysAndHours3};
var advertTime4= {"startDate":"2018-01-16","endDate":"2018-01-31","hoursByDay":daysAndHours4};
var advertTime5= {"startDate":"2018-01-16","endDate":"2018-01-31","hoursByDay":daysAndHours5};



var messages =
    [
        { "id": 1 , "name" : "message1", "text": textArray1, "picture" : images1, "link" : "tmp1.html", "duration" : 2000,"time" : advertTime1, "screens" :  [{id:1},{id:2}]},
        { "id": 2 , "name" : "message2", "text": textArray2, "picture" : images2, "link" : "tmp2.html", "duration" : 2000,"time" : advertTime2, "screens" : [{id:1},{id:3}]},
        { "id": 3 , "name" : "message3", "text": textArray3, "picture" : images3, "link" : "tmp3.html", "duration" : 2000,"time" : advertTime3, "screens" : [{id:2},{id:3}]},
        { "id": 4 , "name" : "message4", "text": textArray4, "picture" : images4, "link" : "tmp1.html", "duration" : 2000,"time" : advertTime4, "screens" : [{id:1}]},
        { "id": 5 , "name" : "message5", "text": textArray5, "picture" : images5, "link" : "tmp2.html", "duration" : 2000,"time" : advertTime5, "screens" : [{id:3}]}
    ];


var user={"user":"Admin","pass":"123456"};

var screensAndTemplates={
    "screens" : {
        "availableScreens" : [
            {
                "id" : 1,
                "name" : "Screen 1"
            },
            {
                "id" : 2,
                "name" : "Screen 2"
            },
            {
                "id" : 3,
                "name" : "Screen 3"
            }
        ]
    },
    "templates" : {
        "availableTemplates" : [
            {
                "id" : "tmp1.html",
                "name" : "Template A"
            },
            {
                "id" : "tmp2.html",
                "name" : "Template B"
            },
            {
                "id" : "tmp3.html",
                "name" : "Template C"
            }
        ]
    }
};


var address =
    [
        { "address": 1 , "name" : "Elie Wiesel St 2,Rishon LeTsiyon,Israel"},
        { "address": 2 , "name" : "Sderot Yitshak Rabin,Rishon LeTsiyon,Israel"}
    ];



//require node modules (see package.json)
var mongodb = require('mongodb');
//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;
// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://localhost:27017/MyDatabase';

MongoClient.connect(url, function(err, db) {
    if (err) {
        console.log('Unable to connect to the mongoDB server. Error:', err);
    }

    var usersCollection = db.collection('Users');
    var messagesCollection = db.collection('Messages');
    var addressCollection = db.collection('Address');
    var dataCollection = db.collection('Data');



    usersCollection.insert(user);
    messagesCollection.insert(messages);
    addressCollection.insert(address);
    dataCollection.insert(screensAndTemplates);


    db.close();
});
