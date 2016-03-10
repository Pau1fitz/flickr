app.filter('regex', function() {
    return function(val){
     var regExp = /\(([^)]+)\)/;
     var match = regExp.exec(val);
     return match[1];
   };
})

app.filter('truncate', function () {
    return function (text, end) {
        var length = 50,
            end = "...";

        if (text.length <= length || text.length - end.length <= length) {
            return text;
        }
        else {
            return String(text).substring(0, length-end.length) + end;
        }

    };
});