// code your solution here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun();
saturdayFun('bathe my dog');

function mondayWork(workLocation = "go to the office"){
    return `This Monday, I will ${workLocation}.`;
}
mondayWork();
mondayWork('work from home');




 function wrapAdjective(character = "*"){
        let result = wrapAdjective("*");
        let emphatic = result("a hard worker");
         const innerFunction = function(adj = "special"){
            return `You are ${character} ${emphatic} ${character}!`
         }
    }

function wrapAdjective(character = "*"){
    return function(adjective = "special"){
        return `You are ${character}${adjective}${character}!`
    }
}