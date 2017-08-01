const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo}= require('./../server/models/todo');
const {User}= require('./../server/models/user');

//Todo.remove({}).then((result)=> {
//    console.log(result);
//    
//});

Todo.findByIdAndRemove('59806fa33e10648ae0d2331d').then((todo) => {
     console.log(todo);

});

Todo.findByIdAndRemove({_id='59806fa33e10648ae0d2331d'}).then((todo) => {
     console.log(todo);

});