const express = require('express')
const app = express()
const port = 3009

app.get('/', (req, res) => res.json([
      
    {
    name: 'Puya',
    email: 'puya@gmail.com'
    },

    {
        name: 'Bob',
        email: 'Bob@gmail.com'
    }
]))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
