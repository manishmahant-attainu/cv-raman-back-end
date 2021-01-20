// A file can have ONLY ONE default export
// A file can have multiple export
export const PORT = 5000;
export const HOST = 'localhost';
export const YEAR = 2021;
export const users = [
    {
        id: 1,
        name: 'Manish',
        gender: 'Male',
        type: 'human'
    },
    {
        id: 2,
        name: 'Ravi',
        gender: 'Male',
        type: 'hero'
    },
    {
        id: 3,
        name: 'Subodh',
        gender: 'Male',
        type: 'SSJ5'
    },

];

export default {
    PORT,
    HOST,
    age:12,
    other:'sdsd',
    getDate: ()=> Date()
}
