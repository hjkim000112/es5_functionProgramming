//curry => 함수와 인자를 다루는 기법 
//함수에 인자를 하나씩 적용해 나가다가 필요한 인자가 모두 채워지면 함수 본체를 실행하는 기법.
//자바스크립트에서는 curry 이 지원되지 않지만 일급함수가 지원되고 평가시점을 마음대로 다룰수있기떄문에 curring같은 기법을 구현할 수 있다.
function _curry(fn){
    return function(a){
        return function(b){
            return fn(a,b);
        }
    }
}


function _curry2(fn){
    return function(a,b){
        return arguments.length == 2 ?
        fn(a,b) : function(b){return fn(a,b);};
       
    }
}
var add = function(a,b){
    return a + b;
}
var add2 = _curry(function(a,b){
    return a+b
})

var add10 = add2(10);
console.log(add10(5));
console.log(add2(5)(3));