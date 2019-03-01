    // Here we have a function called "Outer"
    function Outer() {
      // There is a count variable that is scoped to the function

  var part= 0;
  part+=3;
  console.log(part);
  var count = 0;
      // There is an inner function that increments count and then console.logs it
  function inner() { //the second time, Outer function just run inner() part of the function.
        // increment count
    count++
    part+=3;
        // console.log count
    console.log(count);
    console.log(part);
  }
      // return the inner function! We can return a function!
  return inner
}
// counter is now the function returned from invoking Outer
var counter = Outer();
              // if we invoke the counter function
counter()     // this will console.log "1"
counter()     // this will console.log "2"
counter()     // this will console.log "3"
counter()     // this will console.log "4"
              // So that means that the count variable still exists! 
              // and it is being changed even though we aren't inside of the Outer function!
                   // What if we try to access count out here?
//console.log(count) // doesn't work!
