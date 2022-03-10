// //1급함수

// var f1 = function(a){return a+a;}

// var fs = f1;

// function f3(f){
//     return f();
// }

// console.log(f3( function(){return 10;} ))

function add_maker(a){
    return function(b){
        return a+b;
    }
}

var add10 = add_maker(10);
console.log(add10(20));