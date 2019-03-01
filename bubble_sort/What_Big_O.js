function printArray(arr){
    for(var i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
}
// the Big O Time complexity of printArray() is O(n)



function findNth(arr, n){
        console.log(arr[n]);
}
// the Big O Time complexity of findNth() is O(log(n))



function halving(n){
        var count = 0;
        while(n > 1){
            n = n/2;
            count++;
        }
        return count;
}
// the Big O Time complexity of halving() is O(n)



function identityMatrix(n){
    var matrix = [];
    for(var i=0; i < n; i++){
        var row = [];
        for(var j=0; j < n; j++){
            if(j == i){
                row.push(1);
            }
            else{
                row.push(0);
            }
        }
        matrix.push(row);
    }
    return matrix;
}
// the Big O Time complexity of identityMatrix() is O(n^2)