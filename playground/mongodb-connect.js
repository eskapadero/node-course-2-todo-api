//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
   if(err){
       return console.log('Unable to connect to database')
     } 
    
    console.log('Connected');
//    db.collection('Todos').insertOne({
//        text: 'Something todo',
//        completed: false
//        
//    },(err,result)=> {
//        if (err){
//            
//            return console.log('Unable to insert todo', err);
//        }
//        console.log(JSON.stringify(result.ops, undefined, 2))
//    });
    
//     db.collection('Users').insertOne({
//        name: 'Eskapadero',
//        age: 30,
//         address: 'Consolacion, Cebu'
//        
//    },(err,result)=> {
//        if (err){
//            
//            return console.log('Unable to insert todo', err);
//        }
//        console.log(JSON.stringify(result.ops, undefined, 2))
//    });
//    
    
    
    
    db.close();
});