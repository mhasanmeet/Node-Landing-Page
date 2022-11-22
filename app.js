const express = require('express')
const app = express()
const PORT = 5600

app.listen(PORT, ()=>{
    console.log(`server is listening at ${PORT}`)
})

app.get('/', (req, res)=>{
    res.send('Hello World')
})

