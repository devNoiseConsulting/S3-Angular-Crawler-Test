'use strict';

var seoTest = angular.module('seo_test', [
	'ngRoute'
]);

seoTest.config(function($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('!');

	$routeProvider
		.when('/', {
			templateUrl: 'views/default.html',
			controller: 'DefaultCtrl'
		})
		.when('/test', {
			templateUrl: 'views/test.html',
			controller: 'DefaultCtrl'
		})
		.when('/fail', {
			templateUrl: 'views/fail.html',
			controller: 'DefaultCtrl'
		})

	.otherwise({redirectTo: '/'});
});

seoTest.controller('NavigationCtrl', function ($scope) {
});

seoTest.controller('DefaultCtrl', function($scope){
});