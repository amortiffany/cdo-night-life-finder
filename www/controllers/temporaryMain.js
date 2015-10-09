angular.module('starter.controllers', [])

.controller('popular', function($scope, place) {

	place.get().success(function(data){

		var places = data;
		
		var popular = [];

		angular.forEach(places, function(x) {
                  if (x.tab == "popular") popular.push(x);
          });

		$scope.popularPlaces = popular;

		
	})
  
})

.controller('affordable', function($scope, place) {
  place.get().success(function(data){

		var places = data;
		
		var affordable = [];

		angular.forEach(places, function(x) {
                  if (x.tab == "affordable") affordable.push(x);
          });

		$scope.affordablePlaces = affordable;

		
	})
})

.controller('nearby', function($scope, place) {
  place.get().success(function(data){

		var places = data;
		
		var nearby = [];

		angular.forEach(places, function(x) {
                  if (x.tab == "nearby") nearby.push(x);
          });

		$scope.nearbyPlaces = nearby;

		
	})
})

.controller('categoriesCtrl', function($scope, place) {
  place.category().success(function(data){

		$scope.categories = data;
		
	})
  })

  .controller('categoryCtrl', function($scope, $stateParams, place) {
  place.get().success(function(data){

		var places = data;
		
		var category = [];

		angular.forEach(places, function(x) {
                  if (x.category == $stateParams.categoryName) category.push(x);
                  console.log(places.category)

          });

		$scope.categoryList = category;

		
	})
  })