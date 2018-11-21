const PORT = process.env.PORT || 8080;
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const settings = require('./settings.json')
const knexConfig = require('./knexfile.js').development
const knex = require('knex')(knexConfig);

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('WOW GOOGLE DREAM!!!')
})

app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}!`)
})