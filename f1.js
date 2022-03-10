
        // /*순수함수 add */
        // function add(a,b){
        //     return a + b;
        // }

        // /*인자는 같지만 상황에 따라 리턴 값이 달라지는 함수*/
        // let c = 10;
        // function add2(a,b){
        //     return a+b+c;
        // }

        // console.log(add2(10,2));
        // c = 20;
        // console.log(add2(10,2));





        // function add3(a,b){
        //     c = b;
        //     return a+b;
        // }

        // add3(50,50);
        // console.log(c);

        // var obj1 = {val:10};
        // function add4(obj,b){
        //     obj.val += b;

        // }

        //다시 순수함수
        var obj1 = {val:10};
        function add5(obj,b){
            return {val:obj.val + b}

        }