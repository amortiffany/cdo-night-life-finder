angular.module('starter.services', [])

.factory('place', function($http) {
 
  return {
    get: function() {
      return $http.get('http://localhost/myapp2/www/json/data.json');
          
    },
    category: function() {
      return $http.get('http://localhost/myapp2/www/json/category.json');
          
    }
  }

});
