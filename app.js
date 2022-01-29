const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

const newPort = process.env.PORT || port;
app.listen(newPort, () => {
  console.log(`Express Server listening on port ${newPort}`)
})