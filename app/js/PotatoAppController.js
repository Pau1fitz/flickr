app.controller('potatoCtrl', function (getFlickrData, $routeParams, $window, regexFilter, truncateFilter) {
    var potatoCtrl = this;
    this.posts = [];
    this.currentId = $routeParams.id;
    this.tags = [];
    this.loading = true;

    //call to get the data from Flickr
    getFlickrData.getData().catch(function (err) {
      // Log error somehow.
      console.log(err)
    }).finally(function () {
      // Hide loading spinner whether our call succeeded or failed.
      potatoCtrl.loading = false;
    });

    //used for the google+1 button to ensure it is loaded each time
    $window.gapi.plusone.go("content");

    //API requires jsonFlickrFeed callback function
    jsonFlickrFeed = function(data){
        var x = data.items.length;
        for(var i = 0; i < x; i++){
            potatoCtrl.posts.push(data.items[i]);
            //assign an id to each item to allow navigation to subpage
            potatoCtrl.posts[i].id = i;
            potatoCtrl.tags.push(data.items[i].tags) 
        }
    } 
});









