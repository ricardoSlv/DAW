//Import the mongoose module
import mongoose from "mongoose"

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/DAW2020';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error...'));
db.once('open', function() {
    console.log("Conexão ao MongoDB realizada com sucesso...")
});

var studentSchema = new mongoose.Schema({
    numero: String,
    nome: String,
    git: String,
    tpc: [Number]
});

var studentModel = mongoose.model('student', studentSchema)

// Retrieve all students
studentModel
    .find(function(err, docs) {
    if(err){
        console.log('Error retrieving student records: ' + err)
    }
    else{
        console.log('ola')
        docs.forEach(d=>console.log(d.numero+" "+d.nome))
    }
})
