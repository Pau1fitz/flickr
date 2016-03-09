var app = angular.module('potatoApp', ['ngRoute']);

app.config(function($routeProvider) {
        $routeProvider. 
           when('/', {
             templateUrl: 'app/views/app.html',
             controller: 'potatoCtrl as main'
           }).
           when('/:id', {
             template: '<p>Reaching here</p>',
             controller: 'potatoCtrl as main'
           }).
           otherwise({
             redirectTo: '/'
           });
        });

app.factory('getFlickrData',function($http){
    return{
        getData: function(){
            return $http.jsonp('https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json');
        }
    }
});

app.controller('potatoCtrl', function ($http, getFlickrData, $scope) {
    var potatoCtrl = this;
    this.itemHolder = [];
    this.name="p"

    // call to get the data from Flickr
    getFlickrData.getData()

    //need to use this function as the
    //API is wrapped with jsonFlickrFeed
    jsonFlickrFeed = function(data){
        var x = data.items.length;
        for(var i = 0; i < x; i++){
            potatoCtrl.itemHolder.push(data.items[i]);
            //assign an id to each item
            potatoCtrl.itemHolder[i].id = i + 1;
        }

        console.log(potatoCtrl.itemHolder)
    } 
});




