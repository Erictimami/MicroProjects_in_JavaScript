function coin_change(change){
    var dollar=0, quarter=0, dime=0, nickel=0, pennie=0, result='{';
    dollar=parseInt(change/100);
    if (dollar!=0){
        result+='dollars: '+dollar;
    }
    quarter=parseInt((change-dollar*100)/25);
    if (quarter!=0){
        result+=', quarters: '+quarter;
    }
    dime=parseInt((change-dollar*100-quarter*25)/10);
    if (dime!=0){
        result+=', dimes: '+dime;
    }
    nickel=parseInt((change-dollar*100-quarter*25-dime*10)/5);
    if (nickel!=0){
        result+=', nickels: '+nickel;
    }
    pennie=change-dollar*100-quarter*25-dime*10-nickel*5;
    if (pennie!=0){
        result+=', pennies: '+pennie;
    }
    result+='}'
    return result;
}

console.log('coin_change(312) ', coin_change(312));
console.log('coin_change(78) ', coin_change(78));



// function coin_change(change){
//     var dollar=0, quarter=0, dime=0, nickel=0, pennie=0, result={};
//     dollar=parseInt(change/100);
//     if (dollar!=0){
//         result.push('dollars: '+dollar);
//     }
//     quarter=parseInt((change-dollar*100)/25);
//     if (quarter!=0){
//         result.push('quarters: '+quarter);
//     }
//     dime=parseInt((change-dollar*100-quarter*25)/10);
//     if (dime!=0){
//         result.push('dimes: '+dime);
//     }
//     nickel=parseInt((change-dollar*100-quarter*25-dime*10)/5);
//     if (nickel!=0){
//         result.push('nickels: '+nickel);
//     }
//     pennie=change-dollar*100-quarter*25-dime*10-nickel*5;
//     if (pennie!=0){
//         result.push('pennies: '+pennie);
//     }
//     return result;
// }

// console.log('coin_change(312) ', coin_change(312));
// console.log('coin_change(78) ', coin_change(78));