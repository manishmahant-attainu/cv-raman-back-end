import 'babel-polyfill';
import booksData from './books.json';
const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri,{
    useUnifiedTopology: true
});

async function findUser() {
    try {
      // we are doing aync call  
      await client.connect();

      const database = client.db('cv_raman');
      const collection = database.collection('users');
      
      // here also async call
      const users = await collection.findOne({_id:1});
      console.log(users);
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
//   findUser().catch(console.dir);

async function insertBooks() {
    try {
      // we are doing aync call  
      await client.connect();

      const database = client.db('cv_raman');
      const collection = database.collection('books');
      
      // here also async call
      const books = await collection.insertMany(booksData);

      console.log(books);
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }

  insertBooks().catch(console.dir);