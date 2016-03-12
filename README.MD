<!-- EXPLAIN WHY H1 TAG WAS USED -->
<!-- ALT TAG FOR ACCESSIBILITY AND SEO -->
<!-- add show error -->

<!-- EXPLAIN WHY I DEFINED THE I VARIABLE BEFORE THE LOOP -->
<!-- In the controller you will see that I defined the variable of data.items.length before the loop, and then used the variable in the loop constructor. As we are only looping over a small set of objects it will not make much of a difference to performance here, however when you are dealing with looping over larger data sets it is better to cache the value as a variable to improve performance -->

<!-- Instead of using $scope I used 'this'. As explained in John Papa's Angular style guide it is better to use the controllerAs syntax when writing Angular code - https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#controllers--> 

<!-- EXPLAIN WHY GRUNT WAS USED - minify js and css -->
<!-- I set up grunt in this project both for development purposes, and to minify both the css and javascript for what would be used for the final prodiction code. During development the live reload functionality provided is very convenient, and any errors in your code are flagged. -->

<!-- use of lodash -->
<!-- I used lodash to remove duplicates from the API response. I could have written my own function to remove these duplicates, but felt it was a useful to demostrate that I am aware of this library and the amazing tools that it provides out of the box.