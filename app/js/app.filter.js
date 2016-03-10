app.filter('regex', function() {
    return function(val){
     var regExp = /\(([^)]+)\)/;
     var match = regExp.exec(val);
     return match[1];
   };
})
