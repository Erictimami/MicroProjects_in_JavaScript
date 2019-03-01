function bubble_sort(arr){
    var temp=0;
    for (var j=0; j<arr.length-1; j++){
        var count = 0;
        for (var i=0; i<arr.length-1-j; i++){
            if (arr[i]>arr[i+1]){
                [arr[i], arr[i+1]]=[arr[i+1], arr[i]];
                count+=1;
            }
        }
        if (count ==0){
            return arr;
        }
    }
    return arr;
}

console.log('bubble_sort([6,5,3,1,8,7,2,4]) ', bubble_sort([6,5,3,1,8,7,2,4]));

