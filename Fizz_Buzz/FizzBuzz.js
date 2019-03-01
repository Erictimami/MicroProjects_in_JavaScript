function fizzbuzz(n){
    var result='';
    if (n<=0 || typeof(n)!='number'){
        return 'Parameter mst be a positive number';
    }
    for(var i=1; i<n+1; i++){
        if (i%3==0 & i%5==0){
            if (i==n){
                result+=' and FizzBuzz.';
            }
            else{
                result+=', FizzBuzz';
            }
        }
        if(i%3==0 & i%5!=0){
            if (i==n){
                result+=' and Fizz.';
            }
            else{
            result+=', Fizz';
            }
        }
        if(i%3!=0 & i%5==0){
            if (i==n){
                result+=' and Buzz.';
            }
            else{
            result+=', Buzz';
            }
        }
        if(i%3!=0 & i%5!=0){
            if (i==1){
                result+=i;
            }
            else{
                if (i==n){
                    result+=' and'+i+'.';
                }
                else{
                    result+=', '+i;
                }
            }
        }
    }
    return result;
}

console.log('fizzbuzz(15) : ', fizzbuzz(15));
