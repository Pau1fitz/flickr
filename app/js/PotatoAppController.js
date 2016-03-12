app.controller('potatoCtrl', ["getFlickrData", "$routeParams", "$window", "regexFilter", "truncateFilter", function (getFlickrData, $routeParams, $window, regexFilter, truncateFilter) {
    var potatoCtrl = this;
    this.posts = [];
    this.currentId = $routeParams.id;
    this.loading = true;

    //call to get the data from Flickr
    getFlickrData.getData().success(function (data) {
        var x = data.items.length;
        for(var i = 0; i < x; i++){
            potatoCtrl.posts.push(data.items[i]);
        }
        //lodash function to remove duplicates returned by API
        potatoCtrl.posts = _.uniqBy(potatoCtrl.posts, 'tags'); 
        potatoCtrl.loading = false;
   })
   .error(function () {
     potatoCtrl.loading = false;
     potatoCtrl.error = true;
   });

    //used for the google+1 button to ensure it is loaded each time
    $window.gapi.plusone.go("content");
}]);













