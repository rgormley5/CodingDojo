// Part 1
function starString(num) {
    var str = "";
    for (i = 0; i < num; i++) {
        str += '*'
    }
    return str
}
 
// console.log(starString(5))

// Part 2
function drawStars(arr) {
    for (i = 0; i < arr.length; i++) {
        var str = "";
        for (j = 0; j < arr[i]; j++) {
            str += '*'
        }
    console.log(str)
    }
}

// drawStars([2,3,4])

// Part 3

function nice(arr) {
    for (var i in arr) {
        var str = "";
        if (arr[i].constructor === String) {
            for (j = 0; j < arr[i].length; j++) {
                str += arr[i][0];
            }
            console.log(str)
        } else {
            for (j = 0; j < arr[i]; j++) {
                str += '*';
            }
            console.log(str);
        }
    }
}
console.log(nice([7,"peter",10]))