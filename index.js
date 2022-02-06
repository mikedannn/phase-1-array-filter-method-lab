function findMatching(drivers, string){
    let answer = drivers.filter(element => element === string || element === string.toLowerCase());
    return answer;
}

function fuzzyMatch(drivers, input){
    return drivers.filter(driver => driver.startsWith(input));
}


function matchName(drivers, name){
    return drivers.filter(function(driver){
        return driver.name === name;
    })
}