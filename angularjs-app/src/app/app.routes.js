(function () {
  angular
      .module('legacy')
      .config(function ($stateProvider, $urlRouterProvider) {

        // var counterState = {
        //   url : "/angularjs",
        //   emplateUrl: './app/counter.html',
        //   controller : 'CounterCtrl'
        // }
        // $stateProvider.state('cat', counterState);
      
        // var otherState = {
        //   name: 'other',
        //   url : "/other",
        //   emplateUrl: './app/other.html',
        //   controller : 'OtherCtrl'
        // }
        // $stateProvider.state(otherState);

        $stateProvider
            .state('cat', {
              url        : "/angularjs",
              templateUrl: './app/counter.html',
              controller : 'CounterCtrl'
            });

        $stateProvider
            .state('other', {
              url        : "/other",
              templateUrl: './app/other.html',
              controller : 'OtherCtrl'
            });
        
        
        $urlRouterProvider.otherwise(function ($injector, $location) {
          // If this app can't handle the route, let the parent iframe, the host Angular app, try and handle it.
          var path = $location.path();
          console.log("The AngularJS app recieved a path it couldn't resolve, posting to parent iframe see if it can handle the path " + path);
          // parent is always the parent iframe, we can use the postMessage API to post the URL to the parent iframe here.
          // NOTE: Passing in * is a security vulnerability, need to think about and address this in a real production application.
          parent.postMessage({navigateTo: path}, "*");
        });
      });
})();