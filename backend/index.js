const express = require('express')
const cors = require('cors')
const db = require('./db')

const app = express();

const PORT = 5000;

db.pool.query(`CREATE TABLE IF NOT EXISTS todo (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  value TEXT)`, (err, results, fields) => {
  if (err) return console.log(err)
  console.log('successfully connected')
})

app.use(cors({
  origin: true,
  credentials: true
}))
app.use(express.json())

app.get('/api/todos', (req, res) => {
  db.pool.query(`SELECT * FROM todo;`, (err, results, fields) => {
    if (err) return res.status(500).send(err)
    return res.json(results)
  })
})

app.post('/api/new', ((req, res) => {
  console.log(req.body)
  db.pool.query(`INSERT INTO todo (value) VALUES("${req.body.value}")`, (err, results, fields) => {
    if (err) return res.status(500).send(err)
    return res.json({status: 'success', value: req.body.value})
  })
}))

app.listen(PORT, () => {
  console.log(`GOGOGOGO~~~~~ ${PORT}`)
})