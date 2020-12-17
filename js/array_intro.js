var cars = ['toyota', 'tata', 'bmw'];
var mixed = [
    1,
    'name',
    2,
    {s:'aa',b:'dd'},
    null,
    2.2,
    true,
    false,
    1
];
console.log(mixed[3]);
mixed.push([1,2,34,5]);
mixed.push('12');
mixed.push('dsfsef');

console.log(mixed);

function oneModifier(item,index, arr) {
    if(item === 1) {
        arr[index] = 'one at place '+index
    }
}

// without mutating the original array
console.log(mixed.map(function (item,index) {
    if(item === 1) {
        return 'one at place '+index;
    }
    return item;
}));

// By mutating the original array
mixed.map(oneModifier);

console.log(mixed);