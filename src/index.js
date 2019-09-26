import express from 'express'
import { join } from 'path'
import { __dirname } from './utility.js'

const port = process.env.PORT|| 3001
const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => res.sendFile(join(__dirname, '../public/index.html')))
app.get('*', (req, res) => res.sendFile(join(__dirname, '../public/404.html')))

app.listen(port, () => console.log(`Listening on port ${port}`))
