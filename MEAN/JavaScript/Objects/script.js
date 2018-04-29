// let students = [
//     {name: 'Remy', cohort: 'Jan'},
//     {name: 'Genevieve', cohort: 'March'},
//     {name: 'Chuck', cohort: 'Jan'},
//     {name: 'Osmund', cohort: 'June'},
//     {name: 'Nikki', cohort: 'June'},
//     {name: 'Boris', cohort: 'June'}
// ];

// for (let student in students) {
//     console.log("name is: " + students[student].name + "and cohort is: " + students[student].cohort);
// }

// let sandwich = {
//     slices_of_bread: 2,
//     ham: true,
//     veggies: ['lettuce', 'tomato', 'onion']
// }; 
// console.log(sandwich);
// // logging the entire sandwich and all its properties
// console.log(sandwich.slices_of_bread);

let users = {
    employees: [
        {'first_name': 'Miguel', 'last_name': 'Jones'},
        {'first_name': 'Ernie', 'last_name': 'Bertson'},
        {'first_name': 'Nora', 'last_name': 'Lu'},
        {'first_name': 'Sally', 'last_name': 'Barkyoumb'}
    ],
    managers: [
       {'first_name': 'Lillian', 'last_name': 'Chambers'},
       {'first_name': 'Gordon', 'last_name': 'Poe'}
    ]
 };

// console.log(users)
// console.log(users.employees)
// console.log(users.employees[0].first_name)

 for (let i in users) {
    console.log(i);
    var count = 0
    for (let value in users.employees) {
        count += 1;
        // console.log(value)
        // console.log(users.employees[value].first_name)
        var num = (users.employees[value].last_name.length) + (users.employees[value].first_name.length)
        console.log(count + " - " + users.employees[value].last_name + ", " + users.employees[value].first_name + " - " + num)
    }
 }



