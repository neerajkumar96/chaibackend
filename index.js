// console.log("Chai aur code");
require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/instagram', (req,res)=>{
    res.send('neerajkumar_96')
})

app.get('/login', (req,res)=>{
    res.send('<h1>please login at neeraj and code</h1>')
})

app.get('/youtube', (req,res)=>{
    res.send('<h2>chai aur code</>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})