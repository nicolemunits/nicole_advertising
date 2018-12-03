/**
 * This is the messageEditController.
 * It is responsible to edit all the messages in the data base.
 */

manage.controller('messageEditController', function ($scope, $routeParams, $http) {
    $scope.message=
    {
        "id":0,
        "name": "",
        "text": [""],
        "picture": [""],
        "link": "",
        "duration": "",
        "time": {"startDate":"","endDate":"","hoursByDay":[{"day":"","startHour":"","endHour":""}]},
        "screens": [{}]
    };
    /**
     * the screen id
     * @type {Number}
     */
    var id=parseInt($routeParams.id);

    /**
     * duration of a message in  mil seconds.
     */
    var secToMil = function() {
        $scope.message.duration=$scope.message.duration*1000;
    };
    /**
     * duration of a message in seconds.
     */
    var milToSec = function() {
        $scope.message.duration=$scope.message.duration/1000;
    };

    var originalScreens=[];


    $scope.buttonText = (id > 0) ? 'Update' : 'Add';
    $scope.header = (id > 0) ? 'Edit' : 'Create';


    $scope.screens;
    $scope.templates;

    /**
     * This function fetches from the server, the screens and their templates/
     * And sends back to the server the edit message.
     */
    var init=function() {

        $http.get('/getScreensAndTemplates').success(function (data, status) {
            $scope.templates = data.templates;
            $scope.screens = data.screens;


        });




        if(id>0)
        {
            $http.post('findMessage', id).
            success(function(data, status) {
                $scope.message=data;
                milToSec();
                originalScreens=new Array($scope.message.screens.length);
                for(var i=0;i<originalScreens.length;i++) {
                    originalScreens[i] = $scope.message.screens[i].id;
                }
            });

        }

    };



    init();


    /**
     * updates all messages .
     * @param message
     */
    $scope.update=function(message) {
        secToMil();
        $scope.updateScreens();
        $http.put('/updateMessage', message).success(function(response) {
        });

    };
    /**
     * add a new message to the data base/
     * @param message
     */
    $scope.add=function(message){
        secToMil();
        $http.post('addMessage', message).success(function(data, status) {
        });
    };


    $scope.submit = function() {
        if(id>0)
            $scope.update($scope.message);
        else
            $scope.add($scope.message);

    };



    $scope.addImage = function() {
        if($scope.message.picture.length<5)
            $scope.message.picture.push("");
    };

    $scope.addText = function() {
        if($scope.message.text.length<10)
            $scope.message.text.push("");
    };

    $scope.addDay = function() {
        $scope.message.time.hoursByDay.push({"day":"","startHour":"","endHour":""});
    };

    $scope.addScreen = function() {
        $scope.message.screens.push({id:""});
    };

    $scope.updateScreens = function() {
        for(var i=0;i<originalScreens.length;i++) {
            for (var j = 0; j < $scope.message.screens.length; j++) {
                if (originalScreens[i] == $scope.message.screens[j].id) {
                    originalScreens[i] = "";
                    j=$scope.message.screens.length;
                }
            }

        }

        for(var i=0;i<originalScreens.length;i++)
        {
            if(originalScreens[i]=="") {
                originalScreens.splice(i, 1)
                i--;
            }
        }

        $scope.message.updateScreens=[];

        for(var i=0;i<originalScreens.length;i++){
            $scope.message.updateScreens.push({id:originalScreens[i]});
        }


    }

    $scope.go = function ( path ) {
        $location.path( path );
    };

    $scope.deleteText=function(index){
        if($scope.message.text.length>1 || $scope.message.picture.length>0)
            $scope.message.text.splice(index,1);

    }

    $scope.deleteImage=function(index){
        if($scope.message.text.length>0 || $scope.message.picture.length>1)
        $scope.message.picture.splice(index,1);

    }

    $scope.deleteDay=function(index){
        if($scope.message.time.hoursByDay.length>1)
            $scope.message.time.hoursByDay.splice(index,1);

    }

    $scope.deleteScreen=function(index){
        if($scope.message.screens.length>1)
            $scope.message.screens.splice(index,1);

    }






});
