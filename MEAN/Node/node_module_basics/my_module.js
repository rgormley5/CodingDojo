// Version A: Returns an Object

// module.exports = {
//     greet: function() {
//         console.log("we are now using a module!");
//     }, 
//     add: function(num1, num2) {
//         console.log("the sum is: ", num1 + num2);
//     }
// }


// Version B: Returns a function that returns an Object

module.exports = function() {
    return {
        greet: function() {
            console.log("we are now using a module!");
        },
        add: function(num1, num2) {
            console.log("the sum is: ", num1 + num2);
        }
    }
}


