const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Login', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Mongoose connected');
}).catch((err) => {
    console.error('Mongoose connection error:', err);
});


// const logInSchema=new mongoose.Schema({
//     name:{
//         type:String,
//         required:true
//     },
//     password:{
//         type:Int16Array,String,
//         required:true
//     }
// })

// const LogInCollection=new mongoose.model('LogInCollection',logInSchema)

// module.exports=LogInCollection