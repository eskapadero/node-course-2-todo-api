//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
   if(err){
       return console.log('Unable to connect to database')
     } 
    
    console.log('Connected');
 
    
//db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((results)=>{
//    
//    console.log(results);
//});
//    db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((results)=>{
//    
//    console.log(results);
//});
    
//    db.collection('Users').findOneAndDelete({_id: new ObjectID('597470a983e1262ec231a8bb')}).then((results)=>{
//    
//    console.log(results);
//});
//    
   db.collection('Users').deleteMany({name: 'joemar'}).then((results)=>{
    
    console.log(results);
}); 
    
   // db.close();
});