var a = {name:"Manish"};
var b = {name:"Manish"};

var c = b;

console.log('a==b',a.name==b.name);
console.log('c==b',c==b);

c.name = "CV Raman";
console.log(b);

var d = "vijay";
var e = d;

e = "anything"
console.log(d===e);
console.log(d);