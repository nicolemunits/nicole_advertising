var statistics=angular.module('statisticsApp',['ngRoute','zingchart-angularjs']);

statistics.config(function($routeProvider)
{
    $routeProvider
        .when('/', {
            controller: 'statisticsController',
            templateUrl: 'views/statistics/graph.html'
        })
        .otherwise({
            redirectTo:'/'
        });
});


statistics.directive('nav',function()
{
    return{
        templateUrl:'views/navManage.html'
    };
});

statistics.directive('header',function()
{
    return{
        templateUrl:'../views/header.html'
    };
});


statistics.directive('footer',function()
{
    return{
        templateUrl:'../views/footer.html'
    };
});