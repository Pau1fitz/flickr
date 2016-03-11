//configure the roues for the app
app.config(function($routeProvider) {
    $routeProvider. 
       when('/', {
         templateUrl: 'app/views/app.html',
         controller: 'potatoCtrl as ctrl'
       }).
       when('/:id', {
         templateUrl: 'app/views/user.html',
         controller: 'potatoCtrl as ctrl'
       }).
       otherwise({
         redirectTo: '/'
       });
});