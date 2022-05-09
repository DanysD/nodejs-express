const express = require('express')
const { json } = require('body-parser')
const cors = require('cors')

const server = express()
const port = 4001

server.use(json())
server.use(cors())

let dummycount = 0;
const temperaturaslista = [] 

server.get('/', (req, res) => {

    res.send("temperaturaslista")
});

server.post('/', (req, res) => {

    const { temperaturas } = req.body

    const tempObj = {
        id: dummycount += 1,
        temperaturas: temperatura
    }

    temperaturas.push(tempObj)
    res.send()
});

server.listen(port, (req, res) => {
    console.log(`server running on port ${port}`)
})