var listApp = angular.module("review", ["ngRoute"]).
  config(["$routeProvider", function($routeProvider) {
  $routeProvider.
      when("/", {templateUrl: "view/list.html",
      controller: listController
      }).
      when("/places/:placeCode", {
        templateUrl: "view/details.html",
        controller: listController
      }).
      otherwise({
        templateUrl: "view/list.html",
        controller: listController
      });
}]);

var d={};

function listController($http,$scope,$routeParams) {

    $http({
        method:'GET',
        url:'/list'}).then(function(response){
            $scope.places = response.data;
            d = response.data;
          });


    if ($routeParams.placeCode != null) {
        $scope.place = getplace($routeParams.placeCode);
        $scope.comments = getcomment($routeParams.placeCode);
        $scope.rate = getaverage($routeParams.placeCode);

        
    }

    $scope.addcomment = function addcomment()
    { 
        var data = {
            code: $scope.place.code,
            rating: $scope.rating,            
            comment: $scope.usercomment                      
            };
            $http({
                    method: 'POST',
                    url: '/addComment',
                    data: JSON.stringify(data)
                });
    }

}

function getplace(code) {
    for (var i = 0; i < d.length; i++) {
        if (d[i].code == code)
            return d[i];
    }
    return null;
}


function getcomment(code) {
    for (var i = 0; i < d.length; i++) {
        if (d[i].code == code)
            return d[i].comments;
            
    }
    return null;
}

function getaverage(code) {
    for (var i = 0; i < d.length; i++) {
        if (d[i].code == code)
            {var sum = 0;
                for( var j = 0; j < d[i].rating.length; j++ ){
                    sum = sum + parseInt(d[i].rating[j]);
                }
                var avg = sum/d[i].rating.length;
            return avg;  
            }

    }
    return null;
}

