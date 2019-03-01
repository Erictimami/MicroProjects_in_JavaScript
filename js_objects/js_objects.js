//array of dictionary
console.log('################_Challenge_1_#################');
let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];


function js_objects(arr){
    for(var i = 0; i<arr.length; i++){
        var result ='';
        for(var j = 0; j<Object.keys(arr[i]).length; j++){
            result+= Object.keys(arr[i])[j] +": "+arr[i][Object.keys(arr[i])[j]];
            // console.log()
            if (j+1<Object.keys(arr[i]).length){
                result +=", "
            }
        }
        console.log(result);
    }
}
js_objects(students);

///////////////////////////// VERY IMPORTANT /////////////////////////
// function test(){
//     var string
//     for(var elt in students){
//         string+=students[elt];
//         //console.log(students[elt]);
//         for(var value in students[elt]){
//           console.log(students[elt][value]);
//         }
//     }
// }
// test();


console.log('################_Challenge_2_#################');
// dictionary of the array
let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ],
 };

 function js_objects_2(dict){
    for(var i = 0; i<Object.keys(dict).length; i++){
        console.log(Object.keys(dict)[i].toUpperCase());
        var result ='';
        for(var j = 0; j<dict[Object.keys(dict)[i]].length; j++){
            var each_elt=dict[Object.keys(dict)[i]][j];
            // console.log(each_elt)
            var count = 0;
            for( var k = 0; k<Object.keys(each_elt).length; k++){
                if(k==0){
                    result = (j+1)+ " - "+ each_elt[Object.keys(each_elt)[k]];
                    count = each_elt[Object.keys(each_elt)[k]].length;
                }
                else{
                    result += ", " +each_elt[Object.keys(each_elt)[k]];
                    count += each_elt[Object.keys(each_elt)[k]].length;
                }
            }
            result += " - "+count;
            console.log(result)
        }
    }
}
js_objects_2(users);

