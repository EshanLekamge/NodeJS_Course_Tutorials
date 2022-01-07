const express = require('express')
const app = express()
const {products} = require('./data')

app.get('/',(req,res)=>{
    res.send('<h1>Home page</h1><a href="/api/products">Products</a>')
})

app.get('/api/products',(req,res)=>{
    const newProducts = products.map((product)=>{
        const {id,name,image} = product;
        return {id,name,image}
    })
    res.json(newProducts)
})

app.get('/api/products/:productID',(req,res)=>{

    const {productID} = req.params;
    const singleProduct = products.find((product)=>product.id === Number(productID))
   
    if(!singleProduct){
        res.status(404).send('Product Not Found')
    }

    res.json(singleProduct)

})

app.get('/api/v1/query',(req,res)=>{
    const {search, limit} = req.query
    let sortedProducts = [...products]

    if(search){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    if(limit){
    sortedProducts = sortedProducts.slice(0,Number(limit))
    }
    if(sortedProducts.length < 1){
        res.status(200).send('No products matching')
    }
    res.status(200).json(sortedProducts)

})

app.listen(5000,()=>{
    console.log('Server is listening to port 5000')
})