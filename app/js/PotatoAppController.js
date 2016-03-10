app.controller('potatoCtrl', function (getFlickrData, $routeParams, regexFilter, truncateFilter, $window) {
    var potatoCtrl = this;
    this.posts = [];
    this.currentId = $routeParams.id;
    this.tags = [];

    // call to get the data from Flickr
    getFlickrData.getData();

    $window.gapi.plusone.go("content");




    //need to use this function as the
    //API requires jsonFlickrFeed callback
    jsonFlickrFeed = function(data){
        var x = data.items.length;
        for(var i = 0; i < x; i++){
            potatoCtrl.posts.push(data.items[i]);
            //assign an id to each item
            potatoCtrl.posts[i].id = i;
            potatoCtrl.tags.push(data.items[i].tags) 
        }

        console.log(potatoCtrl.posts)
    } 

});









