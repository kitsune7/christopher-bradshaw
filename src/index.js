import express from 'express'
import path from 'path'
import request from 'request'


const PORT = 3001
const app = express()

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/../public/index.html')))
app.get('/ttr-demo', (req, res) => req.pipe(request('http://localhost:8081')).pipe(res))
app.get('*', (req, res) => {
  if (req.headers.referer === 'http://localhost:3001/ttr-demo') {
    return req.pipe(request(`http://localhost:8081${req.url}`)).pipe(res)
  }
  return res.sendFile(path.join(__dirname + '/../public/404.html'))
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
