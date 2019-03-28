var express = require("express"),
    app = express();

app.get("/", function(req, res){
    res.send("hello world")
});

//program to take the range of two numbers and then output the sum of that range. 
//step declares the increments by which it adds to the sum
// function range (first, second, step) {
//     var arr = []
//     for(let i = first; i >= second; i+=step){
//         arr.push(i)
//     }
//     return arr; 
// }
// function sum(range){
//     var total=0;
//     range.forEach(element => {
//         total=element+total;
//     });
//     return total;
// }
// console.log(sum(range(10,1,-1)));

//this program takes an array and reverses it

// let arr = [1,2,3,4,5,6,7,8,9];
// let reverse =[];
// function reverseArrayInPlace(arr){
//     arr.forEach(element => {
//        reverse.unshift(element); 
//     });
//     return reverse;
// };

// console.log(reverseArrayInPlace(arr));

//convert an array to a list, the same list back to an array, use the helper function prepend to create a new list that adds the element to the front of the input list
//and nth function which takes a list and a number and returns the element at the given position in the list
    // function arrayToList(arr){
    //     let ans = null;
    //     for (let i = arr.length-1; i >= 0; i--){
    //         ans = {
    //             value:arr[i], 
    //             rest: ans
    //         }
    //     };
    //     return ans;
    // }
    // function listToArray(list) {
    //     let array =[];
    //     for(let node = list; node; node=node.rest){
    //         array.push(node.value);
    //     }
    //     return array;
    // }

    // function prepend(value, list){
    //     return {value, rest:list}
    // }

    // function nth(list, n){
    //     if(!list) return undefined;
    //     else if(n == 0) return list.value;
    //     else return nth(list.rest, n-1)
    // }

    // console.log(arrayToList([10,20]));
    // console.log(listToArray(arrayToList([10,20,30])));
    // console.log(prepend(10, prepend(20, null)));
    // console.log(nth(arrayToList([10,20,30]), 1));

    //high order functions
// function noisy (f) {
//     return(...args) => {
//         console.log("calling with", args);
//         let result = f(...args);
//         console.log("called with", args, ", returned", result);
//         return result;
//     };
// }
// noisy(Math.min)(4,3,2,1);

app.listen(8000, () => {
    console.log('Example app listening on port 8000!')
});