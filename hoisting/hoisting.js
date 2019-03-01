var foo = "bar";
function magic(){
    foo = "hello world";
    console.log(foo);
    var foo;   // by putting var in front of foo, we reinitialize foo with the initial global value which is "bar"
    console.log(foo)//if i console.log foo, foo='hello world' because we are still inside the function
}
magic();
console.log(foo);


// var foo;                  // 'foo' is a declaration, it's global and gets hoisted
// function magic(){         // 'magic()' also gets hoisted to the top
//     var foo;              // here 'foo' is declared within 'magic()' and gets hoisted to the top of its scope
//     foo = "hello world";  // we assign a value to our function scoped 'foo'
//     console.log(foo);     // we log it as 'hello world'
// }                       
// foo = "bar";              // here, we assign a value to the global 'foo'
// magic();                  // magic is called, the first console.log runs
// console.log(foo); 


var magicalUnicorns = function(){
    console.log("Will it blend?");
}
magicalUnicorns();
console.log("Don't breathe this!");
