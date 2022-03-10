const users = [
    {id : 1,name:"ID",age:36},
    {id : 2,name:"BJ",age:32},
    {id : 3,name:"JM",age:32},
    {id : 4,name:"PJ",age:27},
    {id : 5,name:"HA",age:25},
    {id : 6,name:"JE",age:26},
    {id : 7,name:"JI",age:31},
    {id : 8,name:"MP",age:23},
]



function _filter(users,predi){ //응용형 함수 : 함수를 인자로 받아서 원하는 시점에 평가를 하면서 로직을 완성해나가는 프로그래밍.
    var new_list = []; //원래의 값을 직접 변형하지 않고 변형된 새로운 값을 리턴한다.
    for(var i = 0; i<users.length; i++){
        if(predi(users[i])){ // 
            new_list.push(users[i]);
        }
    }

    return new_list;
}

console.log(_filter(users,(user)=>{return user.age >= 30}));
console.log(_filter([1,2,3,4],function(num){return num % 2;}));
console.log(_filter([1,2,3,4],function(num){return !(num % 2);}));


function _map(list,mapper){ //응용형 함수 : 함수를 인자로 받아서 원하는 시점에 평가를 하면서 로직을 완성해나가는 프로그래밍.
    var new_list = []; //원래의 값을 직접 변형하지 않고 변형된 새로운 값을 리턴한다.
    for(var i = 0; i<list.length; i++){
        new_list.push(mapper(list[i]));
    }
    return new_list;
}

console.log(_map(users,(item)=>{return item.name}));

console.log(_map(_filter(users,(user)=>{return user.age>= 30}),(user)=>{return user.name}))

// 원래 if 문 안에잇는 조건이 다르면 계속해서 중복코드가 있었는데 그걸 함수를 통해서 변경할 수 있다는게 새로웠다.













