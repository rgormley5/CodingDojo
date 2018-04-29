// function magic_multiply(x, y){
// 
//     if (x.constructor == String || y.constructor == String){
//         return "Error: Can not mupltiply by string"
//     } else {
//         if (x.constructor === Array) {
//             var arr = []
//             for (i = 0; i < x.length; i++) {
//                 var product = x[i] * y;
//                 arr.push(product);
//             }
//             return arr;
//         } else {
//             var product = x * y;
//         }
//         return product;
//     }
// }

function magic_multiply(string, y){
    var arr = []
    for (i = 0; i < y; i++) {
        arr.push(string)
    }
    console.log(arr)
    return arr
}

// // Test 1
// let test1 = magic_multiply(5, 2);
// console.log(test1);

// // Test 2
// let test2 = magic_multiply(0, 0);
// console.log(test2);

// // Test 3
// let test3 = magic_multiply([1, 2, 3], 2);
// console.log(test3);

// // Test 4
// let test4 = magic_multiply(7, "three");
// console.log(test4);

// Test 5
let test5 = magic_multiply("Brendo", 4);
console.log(test5);