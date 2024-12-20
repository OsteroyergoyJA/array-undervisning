let array = ["Tor", 5, true, "Hans", 25, true, "Emil", 28, false];

console.log(array)

let arrayDetails = [{name: "Tor", age: 5, isPresent: true},
{name: "Tor", age: 5, isPresent: true},
{name: "Alex", age: 20, isPresent: true},
{name: "Jørgen", age: 28, isPresent: true},
{name: "Emil", age: 14, isPresent: false},
];


let names = arrayDetails.map (function (person) 
{return person.name;

});

console.log("first person's name:", arrayDetails[0].name);

console.log("second person's age:", arrayDetails[1].age);

console.log(names);

let objectArray = {
    people: [

 {name:'Tor', age: 5},
 {name: 'Hans', age: 25},
 {name: 'Jørgen', age: 28},
 {name: 'Emil', age: 14},
 {name: 'Nils', age: 30},
 {name: 'Maddis', age: 24},
 {name: 'Kai', age: 40},
    ],
    games: ['Lies of p', 'Once Human', 'Marvel Rivals', 'Toxic League'],
    present: [true, false],
};

console.log(objectArray);
console.log(objectArray.people);

