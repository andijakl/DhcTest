const express = require('express')
const app = express()

app.use(express.static('public'))

// http://127.0.0.1/
//app.get('/', (req, res) => {
//    res.send("Hello world");
//})

app.listen(3000, () => console.log("Example app running"))
