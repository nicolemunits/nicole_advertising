var home=angular.module('homeApp',['ngRoute']);

home.config(function($routeProvider)
{
    $routeProvider
        .when('/', {
            controller: '',
            templateUrl: 'views/Home/home2.html'
        }).
        when('/login', {
            controller: 'loginController',
            templateUrl: 'views/Home/login.html'
        }).
        otherwise({
            redirectTo:'/'
        });
});

home.directive('page-top',function()
{
    return{
        templateUrl:'views/home2.html'
    };
});

home.directive('home',function()
{
    return{
        templateUrl:'views/home2.html'
    };
});


home.directive('about',function()
{
    return{
        controller:'googleMapController',
        templateUrl:'views/Home/about2.html'
    };
});
/*
 * <section screens id="screens"></section>
 * */
home.directive('screens',function()
{
    return{
        templateUrl:'views/Home/screens2.html'
    };
});

home.directive('videos',function()
{
    return{
        templateUrl:'views/Home/videos2.html'
    };
});

home.directive('nav',function()
{
    return{
        templateUrl:'views/nav.html'
    };
});

// Docs at http://simpleweatherjs.com

/* Does your browser support geolocation? */
if ("geolocation" in navigator) {
    $('.js-geolocation').show(); 
  } else {
    $('.js-geolocation').hide();
  }
  
  /* Where in the world are you? */
  $('.js-geolocation').on('click', function() {
    navigator.geolocation.getCurrentPosition(function(position) {
      loadWeather(position.coords.latitude+','+position.coords.longitude); //load weather using your lat/lng coordinates
    });
  });
  
  
  



