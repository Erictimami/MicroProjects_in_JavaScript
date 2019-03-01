console.log('################ other case ##################');
$(document).ready(function(){
    var favoritePokemon = $.get("https://pokeapi.co/api/v2/pokemon/1/", function(data){
        console.log("Got my favorite Pokemon", data.name); //the data is only available inside the callback function 'function(data)'  
    });
});       

// //assuming you have jQuery. This gives the same result that the function above
// $(document).ready(function(){
//     var favoritePokemon;
//     $.get("https://pokeapi.co/api/v2/pokemon/1/", function(data){ 
//     	favoritePokemon = data.name;
// 	console.log("Got my favorite Pokemon", favoritePokemon);      // Predict the output!
//     });
// });       

console.log('################ other case ##################');
// // This is the prove that is not because of the API delay that there is undefined variable ...
// var secondFavorite;
// // let's use setTimeout to simulate an API call that takes 0 seconds to complete
// setTimeout(function(){ secondFavorite = "charmander"; }, 0);
// console.log("Got my second favorite", secondFavorite);

var secondFavorite;
// let's use setTimeout to simulate an API call that takes 0 seconds to complete
setTimeout(function(){ secondFavorite = "charmander"; console.log("Got my second favorite", secondFavorite);}, 0);


