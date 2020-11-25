import mongoose from "mongoose"

const mongodb = 'mongodb://127.0.0.1/DAW2020'
mongoose.connect(mongodb,{useNewUrlParser:true, useUnifiedTopology:true})

const db = mongoose.connection

db.on('error', console.error.bind(console,'Connection error'))
db.on('open',()=>console.log('Conexão bem sucedida'))

const studentSchema = new mongoose.Schema({
    numero: String,
    nome: String,
    git: String,
    tpc: [Number]
})

const studentModel = mongoose.model('student', studentSchema)


const data = [
    {
        numero: "A34900",
        nome: "Jose Artur"
    },
    {
        numero: "PG34900",
        nome: "Pai do Jose Artur" 
    }
]

studentModel.create(data)

console.log("That's all folks");