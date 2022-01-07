const express = require('express')
const app = express()
const morgan = require('morgan')
const logger = require('./logger')
const authorize = require('./authorize')

// req => middleware => res

// app.use([logger, authorize])

app.use(morgan('tiny'))

app.get('/', (req,res)=>{
    res.send('Home page')
})

app.get('/about', (req,res)=>{
    res.send('About page')
})

app.get('/api/products', (req,res)=>{
    res.send('Products page')
})

app.get('/api/items', (req,res)=>{
    res.send('Items page')
})

app.listen(5000,()=>{
    console.log('Server is listening to port 5000')
})

