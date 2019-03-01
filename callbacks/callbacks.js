// console.log('################# other_exo #####################');
// var a = 2;
// var b = function() { console.log("something"); };
// // console.log(b)
// function doSomething(x) {
//     console.log(typeof(x));
//   }
// doSomething(a);
// doSomething(b);
// var c = b;
// doSomething(c);
// var d = b();
// doSomething(d);


// console.log('################# other_exo #####################');
// function doSomething(possibleCallback) {
//     if (typeof(possibleCallback) === 'function'){
//       console.log('possibleCallback is a callback!');
//       possibleCallback(); //we can invoke the callback!
//     }
//     else {
//       console.log('possibleCallback: ', possibleCallback, ' is not a callback function.');
//     }
//   }
//   doSomething(function myCallback(){ console.log('yes, I am a callback!') });
//   doSomething('string');


//   console.log('################# other_exo #####################');
//   function makePasta(pasta, makeSauce) {
//     console.log("Boiling water");
//     console.log("Putting " + pasta + " pasta in the water");
//     console.log("Pasta is done!");
//     return pasta + " Pasta! Voila!";
//   }
//   makePasta("Penne");
//   makePasta("Farfalle");


// console.log('################# other_exo #####################');
// function makePasta(pasta, makeSauce) {
//     console.log("Boiling water");
//     console.log("Putting " + pasta + " pasta in the water");
//     // create a variable for sauce!
//     var sauce = makeSauce();          // invoke makeSauce, our callback
//     console.log("Mixing sauce");
//     console.log("Pasta is done!");
//     return pasta + " Pasta with " + sauce + " sauce! Voila!";
// }

// function makePesto() {
//     console.log("Making Pesto");
//     return "pesto";
// }
// console.log(makePasta('Penne', makePesto));


console.log('################# other_exo #####################');
function makePasta(pasta, sauce) {
    console.log("Boiling water");
    console.log("Putting " + pasta + " pasta in the water");
    console.log("Mixing sauce");
    console.log("Pasta is done!");
    return pasta + " Pasta with " + sauce() + " sauce! Voila!";
}

console.log(makePasta('Penne', function makeSauce(){console.log("Making Pesto"); return "pesto";}));
console.log(makePasta('Farfalle', function makeSauce(){console.log("Making Pesto"); return "pesto";}));
