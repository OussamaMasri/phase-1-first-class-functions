function receivesAFunction(callback){
    const myfunction = "helloo"
    callback(myfunction)
}


function hi (){
    return "Hello"
}

function returnsANamedFunction(){
    return hi
}

function returnsAnAnonymousFunction(){
    return function(){
        alert ('hi')
    }
}

