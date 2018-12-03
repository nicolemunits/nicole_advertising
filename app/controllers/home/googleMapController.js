home.controller('googleMapController', function($scope,$http)
{
    $http.get('address').success(function (data, status)
    {
        $scope.address = data;

        function initMap()
        {
            var map = new google.maps.Map(document.getElementById('map'),
                {
                zoom: 15,
                center: {lat: -34.397, lng: 150.644}
            });
            var geocoder = new google.maps.Geocoder();
            geocodeAddress(geocoder, map);
        }

        function geocodeAddress(geocoder, resultsMap)
        {
            var address =  $scope.address[0].name;
            var address2 =  $scope.address[1].name;

            geocoder.geocode({address: address}, function (results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                    resultsMap.setCenter(results[0].geometry.location);
                    var marker = new google.maps.Marker({
                        map: resultsMap,
                        position: results[0].geometry.location
                    });
                } else {
                    alert('Geocode was not successful for the following reason: ' + status);
                }
            });
        }

        initMap();
    })

});