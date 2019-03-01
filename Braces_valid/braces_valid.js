function braces_valid(sentence){
    var braces = {'}':'{', ']':'[', ')':'('};
    var stack =[];
    for (var i=0; i<sentence.length; i++){
        if (sentence[i]=='{' || sentence[i]=='(' || sentence[i]=='['){
            stack.push(sentence[i]);
        }
        if (stack[stack.length-1]==braces[sentence[i]]){
            stack.pop();
        }
    }
    if (stack.length==0){
        return ("True");
    }
    return ("False");
}

console.log('braces_valid("{{()}}[]") : ', braces_valid("{{()}}[]"));

console.log('braces_valid("{(})") : ', braces_valid("{(})"));
