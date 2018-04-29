function zero_negativity(arr) {
    for(i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            return false
        } else {
            return true
        }
    }
}

// let test1 = zero_negativity([-1, 0, 1])
// console.log(test1)

// let test2 = zero_negativity([0, 1])
// console.log(test2)

function is_even(num) {
    if (num % 2 != 0) {
        return false
    } else {
        return true
    }
}

// let test1 = is_even(2)
// console.log(test1)

// let test2 = is_even(1)
// console.log(test2)

function how_many_even(arr) {
    var p = [];
    for (i = 0; i < arr.length; i++) {
        if (p % 2 == 0) {
            p.push(arr[i]);
        }
    }
    return p.length;
}

// let test1 = how_many_even([1,2,3])
// console.log(test1)

// let test2 = how_many_even([2,4,6])
// console.log(test2)

function create_dummy_array(n) {
    var p = [];
    for (i = 0; i < n; i++) {
        p.push(Math.floor(Math.random() * 10));
    }
    return p;
}

// let test1 = create_dummy_array(5)
// console.log(test1)

// let test2 = create_dummy_array(3)
// console.log(test2)