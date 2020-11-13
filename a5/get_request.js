const axios = require("axios").default

axios.get('http://localhost:3000/pubs?_sort=year,title&_order=desc,asc')
    .then(res => {
        data = res.data;
        data.forEach(p => {
            console.log(`${p.year}, ${p.id}, ${p.title}\n`)
        })
    })
    .catch(err => console.error(err))

axios.post('http://localhost:3000/pubs', {
    "id": "DAW2020",
    "title": "Aula5",
    "year": "2020"
}).then(res => console.log(res.data))
    .catch(err => console.error(err))


