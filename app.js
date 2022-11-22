const express = require('express')
const { getIndex, getAbout, getContact, getNotfound } = require('./controller')
const app = express()
const PORT = 5700

app.listen(PORT, ()=>{
    console.log(`server is listening at ${PORT}`)
})

//get css rendered file
app.use(express.static(__dirname + '/public'))

//template engine location set
app.set('view engine', 'ejs')

//get router from controller
app.get('/', getIndex)

app.get('/about', getAbout)

app.get('/contact', getContact)

app.get('/*', getNotfound)



