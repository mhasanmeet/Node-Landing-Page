const express = require('express')
const { getIndex, getAbout } = require('./controller')
const app = express()
const PORT = 5600

app.listen(PORT, ()=>{
    console.log(`server is listening at ${PORT}`)
})

app.get('/', (req, res)=>{
    res.send('Hello World')
})

//get css rendered file
app.use(express.static(__dirname + '/public'))

//template engine location set
app.set('view engine', 'ejs')

//get router from controller
app.get('/', getIndex)

app.get('/about', getAbout)



