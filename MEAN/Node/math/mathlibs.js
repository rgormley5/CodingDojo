module.exports = function() {
    return {
        add: function(num1, num2) {
            console.log("added sum is: ", num1 + num2);
        },
        multiply: function(num1, num2) {
            console.log("multiplied product is: ", num1 * num2);
        },
        square: function(num1) {
            console.log("squared product is: ", Math.pow(num1, 2));
        }, 
        random: function(num1, num2) {
            console.log("random number is: ", Math.floor(Math.random() * (num2 - num1)) + num1);
        }
    }
};