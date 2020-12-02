import express from "express"
import bodyParser, { json } from "body-parser"
import jsonfile from "jsonfile"
import logger from "morgan"

import fs from "fs"
import path from "path"
const __dirname = path.resolve(path.dirname('')); 

import multer from "multer"
const upload = multer({dest: 'uploads/'})

import * as templates from "./html-templates.js"

const app=express()

//app.use(upload.single('myFile'))

app.use(logger('dev'))

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(express.static('public'))

app.get('/', (_,res)=>{
    const d = new Date().toISOString().split(0,16)
    const files = jsonfile.readFileSync('./dbFiles.json')
    //console.log(files)
    res.writeHead(200,{'Content-Type': 'text/html;charset=utf-8'})
    res.write(templates.fileList(files,d))
    res.send()
})

app.get('/files/upload', (_,res)=>{
    const d = new Date().toISOString().split(0,16)
    res.writeHead(200,{'Content-Type': 'text/html;charset=utf-8'})
    res.write(templates.fileForm(d))
    res.send()
})

app.get('/files/download/:fname', (req,res)=>{
    res.download('./public/fileStore/'+req.params.fname)
})


//app.post('/files', upload.array('myFile'), (req,res,next)=>{
//req.files -> array
app.post('/files', upload.single('myFile'), (req,res,next)=>{

    const oldPath = __dirname + '/' + req.file.path
    const newPath = __dirname + '/public/fileStore/' + req.file.originalname
    fs.rename(oldPath,newPath,()=>console.log('ola'))

    const d = new Date().toISOString().split(0,16)
    const files = jsonfile.readFileSync('./dbFiles.json')
    files.push(
        {date: d,
         name: req.file.originalname,
         size: req.file.size,
         mimetype: req.file.mimetype
        })

    jsonfile.writeFileSync('./dbFiles.json',files)

    //res.writeHead(200,{'Content-Type': 'text/html;charset=utf-8'})
    //res.write('<pre>'+JSON.stringify(req.body)+'</pre>')
    //res.write('<pre>'+JSON.stringify(req.file)+'</pre>')
    
    res.redirect('/')
})

app.listen(7700 , ()=> console.log('Servidor á escuta na porta 7700'))