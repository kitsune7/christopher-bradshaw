const express = require('express')
const path = require('path')

const PORT = 3001
const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/../public/index.html')))
app.get('*', (req, res) => {
  return res.sendFile(path.join(__dirname + '/../public/404.html'))
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
