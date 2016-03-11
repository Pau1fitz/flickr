//regex filter for getting username
app.filter('regex', function() {
    return function(val){
     var regExp = /\(([^)]+)\)/;
     var match = regExp.exec(val);
     return match[1];
   };
})

//regex filter for truncating message
app.filter('truncate', function () {
    return function (text, end) {
        var length = 35,
            end = "...";
            
        return String(text).substring(0, length-end.length) + end;
    };
});