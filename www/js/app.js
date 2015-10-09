// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('home', {
    url: '/home',
    abstract: true,
    templateUrl: 'partials/home.html',
  })

    .state('home.tabs', {
    url: '/tabs',
    views: {
      'homeContent': {
        templateUrl: 'partials/tabs.html'
      }
    }
  })

    .state('home.categories', {
    url: '/categories',
    views: {
      'homeContent': {
        templateUrl: 'partials/categories.html',
        controller: 'categoriesCtrl'
      }
    }
  })

    .state('home.category', {
    url: '/categories/:categoryName',
    views: {
      'homeContent': {
        templateUrl: 'partials/category.html',
        controller: 'categoryCtrl'
      }
    }
  })

  .state('home.tabs.popular', {
    url: '/popular',
    views: {
      'popular': {
        templateUrl: 'partials/popular.html',
        controller: 'popular'
      }
    }
  })

  .state('home.tabs.affordable', {
    url: '/affordable',
    views: {
      'affordable': {
        templateUrl: 'partials/affordable.html',
        controller: 'affordable'
      }
    }
  })

  .state('home.tabs.nearby', {
    url: '/nearby',
    views: {
      'nearby': {
        templateUrl: 'partials/nearby.html',
        controller: 'nearby'
      }
    }
  })

  .state('placetabs', {
    url: '/placetabs',
    abstract: true,
    templateUrl: 'partials/placetabs.html',
  })

  .state('placetabs.details', {
    url: '/details',
    views: {
      'details': {
        templateUrl: 'partials/details.html'
      }
    }
  })

  .state('placetabs.menu', {
    url: '/menu',
    views: {
      'menu': {
        templateUrl: 'partials/menu.html',
      }
    }
  })

  .state('placetabs.reviews', {
    url: '/reviews',
    views: {
      'reviews': {
        templateUrl: 'partials/reviews.html',
      }
    }
  })

  $urlRouterProvider.otherwise('home/tabs/popular');
});