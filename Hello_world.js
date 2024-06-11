var createHelloWorld = function(){
    
    return function(...arg){
        return arg[0]
    }
}

const f = createHelloWorld();
console.log(f("Hello World","Second arg"))
