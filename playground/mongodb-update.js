//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
   if(err){
       return console.log('Unable to connect to database')
     } 
    
    console.log('Connected');
 
//    db.collection('Todos').findOneAndUpdate({
//        _id: new ObjectID('59746f0183e1262ec231a7f9')
//        
//    },{
//        $set:{
//            
//            completed: true
//        }   
//        
//    },{
//        
//        returnOriginal: false
//        
//    }).then((result) => {
//        
//       console.log(result);
//        
//    });
//    
//   
    
       db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5974666e4db4d019c4224044')
        
    },{
        $set:{
            
            name: 'Joemar'
        },
           
        $inc:{
            
            age: 2
        }   
        
    }, {
        
        returnOriginal: false
        
    }).then((result) => {
        
       console.log(result);
        
    });
    
   
    
   // db.close();
});