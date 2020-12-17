var info = {};

var response = {
    data: [
        {'s.s':'aa',b:'dd', s:{s:"aaaaa"}},
    ],
    message: "Hey, Hello Object",
    status: 200
}

console.log(response)

console.log(response.data[0].s.s);

console.log(response.data[0]['s.s']);

response.data[0]['s.s'] = 'vijay s.s';
response.data[0].s.d = 'vijay s s';

response.name = "Manish";

response.batchName = "CV-Raman";

console.log(response);

delete response.batchName;