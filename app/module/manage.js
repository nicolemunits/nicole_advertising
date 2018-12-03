
var manage=angular.module('manageAdsApp',['ngRoute']);

manage.config(function($routeProvider)
{
    $routeProvider

        .when('/', {
            controller: 'messagesListController',
            templateUrl: 'views/manage/messageslist.html'
        })
        .when('/messageedit/:id', {
            controller: 'messageEditController',
            templateUrl: '../views/manage/messageedit.html'
        }).
    otherwise({
        redirectTo:'/'
    });
});

manage.directive('nav',function()
{
    return{
        templateUrl:'views/navManage.html'
    };
});

manage.directive('header',function()
{
    return{
        templateUrl:'../views/header.html'
    };
});


manage.directive('footer',function()
{
    return{
        templateUrl:'../views/footer.html'
    };
});



