const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27042'
const dbName = 'mern-pool';
MongoClient.connect(url, function(err, client) { 
     if (err) {
         return console.log("Connection failed"); 
     }
     console.log("Connection successful");
    const db = client.db(dbName);  
     client.close();

const createStudent = async object => {  const collection = db.collection('students');  
     const student = collection.insertOne(object);  
     return student}
     const newStudent = {id: 1, lastname: "John", firstname: "Doe", email: "ruben@free.fr", phone: "45", validated: "validated", admin: true}
     createStudent(newStudent)
     console.log(newStudent)
});


     
