'use strict';

angular.module('jsonforms-website', [
    'ngMaterial',
    'ngRoute',
    'ui.ace',
    //'ui.bootstrap',
    //'ui.validate',
    //'ui.grid',
    'jsonforms',
    'jsonforms-material'
])
/*
.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('red')
        //.backgroundPalette('yellow')
        ;
})
*/
.config(function($mdIconProvider) {
    $mdIconProvider.defaultIconSet('../css/mdi.svg');
    $mdIconProvider.defaultViewBoxSize([152]);
})
.config(function($mdThemingProvider) {
    $mdThemingProvider.definePalette('esPalette', {
      '50': '#ffffff',
      '100': '#e9f3fa',
      '200': '#bbd8f0',
      '300': '#80b7e4',
      '400': '#67a8de',
      '500': '#4e9ad9',
      '600': '#358cd4',
      '700': '#297cc0',
      '800': '#246ca7',
      '900': '#1f5c8e',
      'A100': '#ffffff',
      'A200': '#e9f3fa',
      'A400': '#67a8de',
      'A700': '#297cc0',
      'contrastDefaultColor': 'light',
      'contrastDarkColors': '50 100 200 300 400 500 A100 A200 A400'
    });
    $mdThemingProvider.definePalette('esPaletteDark', {
      '50': '#9bd0ff',
      '100': '#4facff',
      '200': '#1792ff',
      '300': '#006dce',
      '400': '#005db0',
      '500': '#004d91',
      '600': '#003d72',
      '700': '#002c54',
      '800': '#001c35',
      '900': '#000c17',
      'A100': '#9bd0ff',
      'A200': '#4facff',
      'A400': '#005db0',
      'A700': '#002c54',
      'contrastDefaultColor': 'light',
      'contrastDarkColors': '50 100 A100 A200'
    });
  $mdThemingProvider.theme('default')
    .primaryPalette('esPaletteDark')
})
.config(
        function($routeProvider, $locationProvider) {
            $routeProvider.when('/home', {
                templateUrl: 'home/home.html',
                controller: 'HomeCtrl'
            });
            $routeProvider.when('/localdemo', {
                templateUrl: 'demo/localdemo.html',
                controller: 'LocalDemoCtrl'
            });
            $routeProvider.when('/docs', {
                //templateUrl: 'docs/docs.html',
                //controller: 'DocsCtrl'
                redirectTo: '/docs/quickstart'
            });
            $routeProvider.when('/docs/quickstart', {
                templateUrl: 'docs/quickstart.html',
                controller: 'DocsCtrl'
            });
            $routeProvider.when('/docs/tutorial', {
                templateUrl: 'docs/tutorial.html',
                controller: 'DocsCtrl'
            });
            $routeProvider.when('/docs/tutorial_emfforms', {
                templateUrl: 'docs/tutorial_emfforms.html',
                controller: 'DocsCtrl'
            });
            $routeProvider.when('/support', {
                templateUrl: 'support/support.html',
                controller: 'SupportCtrl'
            });
            $routeProvider.otherwise({
                redirectTo: '/home'
            });

            $locationProvider.html5Mode(true);
        }
    )
;

var app = angular.module('jsonforms-website');
app.controller('AppCtrl', function()  {
    var vm = this;
    vm.showMainNav = false;
    vm.toggleMainMenu = function () {
        vm.showMainNav = !vm.showMainNav;
    };
});
app.controller('SupportCtrl', function()  {});
app.controller('DocsCtrl',['$scope', function($scope)  {
    $scope.showDocsNav = false;
    $scope.toggleDocsMenu = function () {
        $scope.showDocsNav = !$scope.showDocsNav;
    };
}]);
app.directive('docsMenu', ['$location',function($location) {
  return {
    restrict: 'E',
    scope:{},
    templateUrl: 'docs/docs_menu.html',
    link: function (scope) {
      scope.showDocsNav = false;
      scope.toggleDocsMenu = function () {
          scope.showDocsNav = !scope.showDocsNav;
      };
      scope.isSelected=function(selected) {
          return selected==$location.path();
      }
    }
  };
}]);
app.directive('mainMenu', function() {
  return {
    restrict: 'E',
    templateUrl: 'common/main_menu.html',
    link: function (scope) {
        scope.showMainNav = false;
        scope.toggleMainMenu = function () {
            scope.showMainNav = !scope.showMainNav;
        };
    }
  };
});
