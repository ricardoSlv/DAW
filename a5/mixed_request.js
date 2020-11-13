const axios = require("axios").default

axios.get('http://localhost:3000/cursos')
        .then(res => {
            const cursos = res.data
            cursos.map((c, i) => {
                axios.post('http://localhost:3001/pubs', {
                    "id": c.id+"3",
                    "title": c.designacao,
                    "year": "2020"
                }).then(
                    resp => console.log('Insert ', c.id+"3")
                ).catch(err => console.error('Pub insert failed', err))
            })
        }).catch(err => console.error(err))