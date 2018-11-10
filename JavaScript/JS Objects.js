// Assignment: JavaScript Objects
// Objectives:
// Assess your familiarity with JavaScript, particularly iterating over arrays and objects.

// Challenge 1
// Write a function that accepts an array of student objects, as shown below. Print all of the students' names and their cohorts.
function printCohort(arr){
    for(var i = 0; i < arr.length; i++){
        console.log("Name: " + arr[i].name + ", Cohort: " + arr[i].cohort)
    }
}

let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

printCohort(students);

// Challenge 2
// Write a function that accepts an object of users divided into employees and managers, as shown below, and logs the information to the console.
function employeesManagers(obj){
    for(let segment in users){
        console.log(segment.toUpperCase());
        for(var i = 0; i < users[segment].length; i++){
            var charCount = users[segment][i].last_name.length + users[segment][i].first_name.length;
            console.log(i+1 + " - " + users[segment][i].last_name.toUpperCase() + ", " + users[segment][i].first_name.toUpperCase() + " - " + charCount)
        }
    }
}

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

 employeesManagers(users);