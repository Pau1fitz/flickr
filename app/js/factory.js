//factory used to make GET request to Flickr
app.factory('getFlickrData', function($http){
    return{
        getData: function(){
            return $http.jsonp('https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json');
        }
    }
});
