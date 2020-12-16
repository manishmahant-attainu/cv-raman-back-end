//Array Loops
var people = ['person 1', 'person 2', 'person 3'];
var numbers = [1,2,3,4,5,6,7,8,9,10];
var mixed = [1,'person 1', 2, 'person 3', 'person 4'];
var data = [
    { name: 'Person 1', rank: 1 },
    { name: 'Person 2', rank: 2 },
    { name: 'Person 3', rank: 3 },
];

// console.log(data);
// For
// for(var i = 0; i < data.length; i++) {
//     console.log(typeof data[i], data[i]);
// }

var i = 0;
// While
// while(i < data.length) {
//     console.log(typeof data[i], data[i]);
//     i++;
// }

// Do While
// do {
//     console.log(typeof data[i], data[i]);
//     i++;
// }
// while(i < data.length);

// for/in
var peopleInfo = { 
    name: 'Person 1',
    rank: 1,
    age: 20 
};
console.log(peopleInfo.name)
console.log(peopleInfo['name'])
var x;
for(x in peopleInfo) {
    console.log(x, peopleInfo[x]);
}
