function MaxMinAvg(arr){
    var min=arr[0], max=arr[0], avg=0;
    for(var i=0; i<arr.length; i++){
        if (arr[i]<min){
            min=arr[i];
        }
        if (arr[i]>max){
            max=arr[i];
        }
        avg+=(arr[i]/arr.length);
    }
    return max, min, avg;
}

console.log('[max, min, avg]: ',MaxMinAvg([1,-2,9,4]));
