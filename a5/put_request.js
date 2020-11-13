const { default: Axios } = require("axios")

const axios = require("axios").default

Axios.post('http://localhost:3000/instrumentos',{"id":"I79","#text":"Kazzoo"})
    .then(res=>console.dir(res.headers.location))
    .catch(err=>console.error(err))