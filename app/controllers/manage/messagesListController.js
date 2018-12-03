/**
 * This is the messagesListController which is responsible for getting all the messages from the data base and present them .
 */
manage.controller('messagesListController',function ($scope, $http){


    $scope.messages;
    $scope.ViewEnum = {
        Card: 0,
        List: 1
    };



    var init=function() {
        $http.get('getAllMessages').success(function(data) {
            $scope.messages= data;
        });
    };



    init();



    $scope.changeView = function (view) {
        switch (view) {
            case $scope.ViewEnum.Card:
                $scope.listViewEnabled = false;
                break;
            case $scope.ViewEnum.List:
                $scope.listViewEnabled = true;
                break;
        }
    };


    $scope.deleteMessage=function(message){
        $http.post('deleteMessage', message).
            success(function(data, status) {
            });

        for (var i = 0; i < $scope.messages.length; i++) {
            if ($scope.messages[i].id == message.id) {
                $scope.messages.splice(i, 1);
                break;
            }
        }

    }


});