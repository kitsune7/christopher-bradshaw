import express from 'express'
import path from 'path'

const NODE_ENV = process.env.NODE_ENV
const PORT = NODE_ENV == "production"? 80: 3000

const app = express()

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/../public/index.html')))
app.get('*', (req, res) => res.sendFile(path.join(__dirname + '/../public/404.html')))

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
