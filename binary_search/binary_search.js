
var position=0;

function binary_search(arr, n){

    var position_0=0, position_1=0, count=0;

    function bin(brr, n){
        if (brr.length<2){
            if(brr[0]==n){
                console.log(position_1);
                return position_1;
            }
            else{
                console.log(-1);
                return (-1);
            }
        }
        if (brr[parseInt(brr.length/2)] >n){
            brr=brr.splice(0, parseInt(brr.length/2));
            position_0 = position_1;
            count=-1;
        }
        else{
            brr=brr.splice(parseInt(brr.length/2), brr.length-1);
            if(count!=-1){
                position_1 += parseInt(brr.length);
                count=1;
            }
            else{
                position_1 = position_0 + parseInt(brr.length);
            }
        }
        bin(brr, n);
    }
    return bin(arr, n);
}

binary_search([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94, 200], 93);
binary_search([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94], 15);