// console.log('############# Exercise 1 #############');
// {
//     console.log(example); // example is undefined
//     let example = "I'm the example!";    
// }
// console.log(example);  // example is not definite outside of block


// console.log('############# Exercise 2 #############');
// test();
// var needle = 'haystack';
// function test(){
//     var needle = 'magnet';
// 	console.log(needle); //console log 'magnet' when the fuction test() is called
// }

// console.log('############# Exercise 3 #############');
// var brendan = 'super cool'; 
// function print(){
// 	brendan = 'only okay';
// 	console.log(brendan); //we never called the function print()
// }
// console.log(brendan); //console log 'super cool'


// console.log('############# Exercise 4 #############');
// var food = 'chicken';
// console.log(food); //console log 'chicken'
// eat();
// function eat(){
// 	food = 'half-chicken';
// 	console.log(food); //console log 'half-chicken'
// 	var food = 'gone';
// }

// console.log('############# Exercise 5 #############');
// mean(); // mean is not a fucntion. it's a variable
// console.log(food); //food is undefined
// var mean = function() {
// 	food = "chicken";
// 	console.log(food); //food is undefined
// 	var food = "fish";
// 	console.log(food); // console.log 'fish'
// }
// console.log(food);

// console.log('############# Exercise 6 #############');
// console.log(genre); // genre is undefined
// var genre = "disco";
// rewind();
// function rewind() {
// 	genre = "rock";
// 	console.log(genre); // console log 'rock'
// 	var genre = "r&b";
// 	console.log(genre); // console log 'r&b'
// }
// console.log(genre); // console log 'disco'


// console.log('############# Exercise 7 #############');
// dojo = "san jose";
// console.log(dojo); //console log 'san jose'
// learn();
// function learn() {
// 	dojo = "seattle";
// 	console.log(dojo); //console log 'seattle'
// 	var dojo = "burbank";
// 	console.log(dojo); // console log 'burbank'
// }
// console.log(dojo); // console log 'san jose'

console.log('############# Exercise 8 #############');

console.log(makeDojo("Chicago", 65)); // console log: {name: "Chicago", students: 65, hiring: true}
console.log(makeDojo("Berkeley", 0)); 
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name; // dojo.name is undefined
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        //dojo = "closed for now"; //we can not modify the type of variable of dojo (change dictionary to string) TYPE_ERROR
        dojo.hiring = "closed for now";
    }
    return dojo;
}