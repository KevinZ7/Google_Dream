const PORT = process.env.PORT || 8080;
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const settings = require('./settings.json')
const knex = require('knex')({
  client: 'pg',
  connection: settings
});

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('WOW GOOGLE DREAM!!!')
})

app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}!`)
})