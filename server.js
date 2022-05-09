//console.log("hello world")
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('hello world!')
})
app.post('/', (req, res) => {
    res.send('got a post request')
})
app.put('/', (req, res) => {
    res.send('Got a PUT request at /user')
})
app.delete('/', (req, res) => {
    res.send('Got a DELETE request at /user')
  })
app.listen(port, () => {
    console.log(`example app listening n port ${port}`)
})