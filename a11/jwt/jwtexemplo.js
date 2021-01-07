import fs from 'fs'
import jwt from 'jsonwebtoken'

const privateKey = fs.readFileSync('private.pem')
const publicKey = fs.readFileSync('public.pem')

const token = jwt.sign({username: 'jcr', level:'admin', expiresIn: "1d"}, privateKey,{algorithm: 'RS256'})
console.log("Token: ", token)

try{
    const decoded = jwt.verify(token,'segredo errado')
    console.log(decoded)
}catch(e){
    console.log('Error: ',e)
}

jwt.verify(token, publicKey, {algorithms: ['RS256']}, (e,payload)=>{
    console.log(e||payload)
})